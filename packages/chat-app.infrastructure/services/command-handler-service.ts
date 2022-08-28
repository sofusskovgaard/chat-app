import events from 'events'

import AmqpService from 'chat-app.infrastructure/services/amqp-service'
import Command from 'chat-app.infrastructure/command-handlers/command'

import CommandHandler from 'chat-app.infrastructure/command-handlers/command-handler'

const eventEmitter = new events.EventEmitter()

class CommandHandlerService {
  AmqpService: AmqpService

  handlers!: Map<typeof Command, CommandHandler<Command>>

  constructor({ AmqpService }: { AmqpService: AmqpService }) {
    this.AmqpService = AmqpService
  }

  async bootstrap(...handlers: [typeof Command, new(...args: any[]) => CommandHandler<Command>][]) {
    this.handlers = new Map()

    handlers.forEach(item => this.handlers.set(item[0], new item[1]))

    await this.assert_exchanges()
    await this.assert_queues()

    this.listen()
  }

  private async assert_exchanges() {
    const channel = await this.AmqpService.getChannel()
    await channel.assertExchange("chat-app.direct", "direct", { durable: true })
  }

  private async assert_queues() {
    const channel = await this.AmqpService.getChannel()

    for (const item of this.handlers) {
      const name = Reflect.getMetadata("queue", item[0])
      await channel.assertQueue(name, { durable: true })
      await channel.bindQueue(name, "chat-app.direct", name)
    }
  }

  private async listen() {
    const channel = await this.AmqpService.getChannel()

    for (const item of this.handlers) {
      const handler: CommandHandler<Command> = item[1]
      const queue = Reflect.getMetadata("queue", item[0])

      const consumer = await channel.consume(queue, (message) => {
        console.log('ayo, consuming command')
        if (message == null) return
        const command: Command = JSON.parse(message.content.toString("utf-8"))
        handler.handle(command)
      }, { noAck: true })

      console.log(`[worker]: consumer ${consumer.consumerTag} listening on ${queue}`)
    }
  }
}

export default CommandHandlerService
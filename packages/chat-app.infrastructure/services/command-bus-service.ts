import "reflect-metadata"

import AmqpService from 'chat-app.infrastructure/services/amqp-service'

import Command from 'chat-app.infrastructure/command-handlers/command'

class CommandBusService {
  AmqpService: AmqpService

  constructor({ AmqpService }: { AmqpService: AmqpService }) {
    this.AmqpService = AmqpService
  }

  async send<T extends Command>(command: T): Promise<boolean> {
    const name = Reflect.getMetadata("queue", command.constructor)
    const channel = await this.AmqpService.getChannel()
    return channel.publish("chat-app.direct", name, Buffer.from(JSON.stringify(command)))
  }
}

export default CommandBusService
import amqplib from 'amqplib'
import events from 'events'

const eventEmitter = new events.EventEmitter()

class AmqpService {
  private connection!: amqplib.Connection
  private channel!: amqplib.Channel
  
  initialized: boolean = false

  constructor() {
    this.initialize()
  }

  async getConnection() {
    await this.ready()
    return this.connection
  }

  async getChannel() {
    await this.ready()
    return this.channel
  }

  async ready(): Promise<void> {
    return new Promise((resolve) => {
      if (this.initialized) {
        resolve()
      } else {
        eventEmitter.on("ready", () => resolve())
      }
    })
  }

  private async initialize() {
    if (this.initialized) return

    this.connection = await amqplib.connect(process.env.RABBITMQ_URI as string)
    console.log("[AmqpService]: Successfully connected")

    this.channel = await this.connection.createChannel()
    console.log("[AmqpService]: Successfully opened channel")

    this.initialized = true
    eventEmitter.emit("ready")
  }
}

export default AmqpService

import { createContainer, asClass, AwilixContainer, Constructor, FunctionReturning, LifetimeType } from 'awilix'

import AmqpService from 'chat-app.infrastructure/services/amqp-service'
import CommandHandlerService from 'chat-app.infrastructure/services/command-handler-service'
import CommandBusService from 'chat-app.infrastructure/services/command-bus-service'

import UsersService from 'chat-app.infrastructure/services/data/users-service'
import RoomsService from 'chat-app.infrastructure/services/data/rooms-service'
import MessagesService from 'chat-app.infrastructure/services/data/messages-service'

class Container {
  private readonly container: AwilixContainer

  constructor() {
    this.container = createContainer()

    this.register_services()
  }

  private register_services() {
    this.register(AmqpService, "SINGLETON")
    this.register(CommandHandlerService, "SINGLETON")
    this.register(CommandBusService)

    this.register(UsersService)
    this.register(RoomsService)
    this.register(MessagesService)
  }

  private register<T>(type: Constructor<T>, lifetime: LifetimeType = "TRANSIENT"): void {
    this.container.register(type.name, asClass(type).setLifetime(lifetime))
  }

  resolve<T>(type: Constructor<T>): T {
    return this.container.resolve<T>(type.name)
  }
}

const container = new Container()
export default container

import mongoose from 'mongoose'

import CommandHandler from 'chat-app.infrastructure/command-handlers/command-handler'
import CreateUserCommand from 'chat-app.infrastructure/commands/create-user-command'

import User from 'chat-app.data/schemas/user-schema'

class CreateUserCommandHandler extends CommandHandler<CreateUserCommand> {
  async handle(command: CreateUserCommand): Promise<void> {
    console.log('ay got a command', command)
    await User.create({
      first_name: command.first_name,
      last_name: command.last_name,
      email: command.email,
      password: command.password
    })
  }
}

export default CreateUserCommandHandler

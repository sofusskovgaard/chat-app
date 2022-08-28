import "reflect-metadata"
import mongoose from 'mongoose';

import CommandHandlerService from 'chat-app.infrastructure/services/command-handler-service'
import Environment from 'chat-app.utils/environment';

import CreateUserCommand from 'chat-app.infrastructure/commands/create-user-command';
import CreateUserCommandHandler from './command-handlers/create-user-command-handler';

import Container from 'chat-app.infrastructure/container'

Environment.configure();

async function initialize_database() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

initialize_database()

Container.resolve<CommandHandlerService>(CommandHandlerService.name)
  .bootstrap(
    [CreateUserCommand, CreateUserCommandHandler]
  )

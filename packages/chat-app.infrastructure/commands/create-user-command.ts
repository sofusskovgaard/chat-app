import Command from "chat-app.infrastructure/command-handlers/command";

@Reflect.metadata("queue", "create-user")
class CreateUserCommand extends Command {
  first_name!: string
  last_name!: string
  email!: string
  password!: string
}

export default CreateUserCommand

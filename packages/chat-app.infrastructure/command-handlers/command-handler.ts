import Command from './command'

abstract class CommandHandler<TCommand extends Command> {
  abstract handle(command: TCommand): Promise<void>;
}

export default CommandHandler

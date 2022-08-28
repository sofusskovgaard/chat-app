import "reflect-metadata"

@Reflect.metadata("queue", "bruh")
abstract class Command {
  commandType = this.constructor.name
}

export default Command

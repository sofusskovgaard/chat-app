import Event from './event'

abstract class EventHandler<TEvent extends Event> {
  abstract handle(command: TEvent): Promise<void>;
}

export default EventHandler


abstract class Event {
  eventType: string = this.getEventName()

  private getEventName(): string {
    return this.constructor.name
  }
}

export default Event

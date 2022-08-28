import { Query, Resolver, Mutation, Arg, FieldResolver, Root } from "type-graphql"

import Schema, { MessageInput } from "./schema"
import UserSchema from "chat-app.data/schemas/user-schema"

import Container from "chat-app.infrastructure/container"
import MessagesService from "chat-app.infrastructure/services/data/messages-service"
import UsersService from "chat-app.infrastructure/services/data/users-service"
import RoomsService from "chat-app.infrastructure/services/data/rooms-service"


@Resolver(() => Schema)
export default class {
  @FieldResolver(() => UserSchema)
  async room(@Root() message: Schema) {
    return Container.resolve(RoomsService).getById(message.room_id)
  }

  @FieldResolver(() => UserSchema)
  async author(@Root() message: Schema) {
    return Container.resolve(UsersService).getById(message.author_id)
  }

  @Query(() => Schema)
  async getMessage(@Arg("id") id: string): Promise<Schema | null> {
    return Container.resolve(MessagesService).getById(id)
  }

  @Query(() => [Schema])
  async getMessages(@Arg("room_id") room_id: string): Promise<Schema[]> {
    return Container.resolve(MessagesService).getByRoomId(room_id)
  }

  @Query(() => [Schema])
  async getMessagesForAuthor(@Arg("room_id") room_id: string, @Arg("author_id") author_id: string): Promise<Schema[]> {
    return Container.resolve(MessagesService).getByRoomForAuthorId(room_id, author_id)
  }
}

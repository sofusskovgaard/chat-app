import { Query, Resolver, Mutation, Arg } from "type-graphql"

import Schema, { RoomInput } from "./schema"

import Container from "chat-app.infrastructure/container"

import RoomsService from "chat-app.infrastructure/services/data/rooms-service"

import { GenericResponse } from "../shared-schema"

@Resolver(() => Schema)
export default class {

  @Query(() => [Schema])
  async getRooms(): Promise<Schema[]> {
    return Container.resolve(RoomsService).getAll()
  }

  @Query(() => Schema)
  async getRoom(@Arg("id") id: string): Promise<Schema | null> {
    return Container.resolve(RoomsService).getById(id)
  }

  @Mutation(() => Schema)
  async createRoom(@Arg("input") input: RoomInput): Promise<Schema> {
    return Container.resolve(RoomsService).create(input)
  }

  @Mutation(() => GenericResponse)
  async archiveRoom(@Arg("room_id") room_id: string): Promise<GenericResponse> {
    Container.resolve(RoomsService).archive(room_id)
    return new GenericResponse("success")
  }
}

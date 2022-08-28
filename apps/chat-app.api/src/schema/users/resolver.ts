import { Query, Resolver, Mutation, Arg } from "type-graphql"

import Schema, { UserInput } from "./schema"

import Container from 'chat-app.infrastructure/container'

import CommandBusService from 'chat-app.infrastructure/services/command-bus-service'
import UsersService from 'chat-app.infrastructure/services/data/users-service'

import CreateUserCommand from "chat-app.infrastructure/commands/create-user-command"

import { GenericResponse } from "../shared-schema"

@Resolver(() => Schema)
export default class {
    @Query(() => [Schema])
    async getUsers(): Promise<Schema[]> {
      return Container.resolve(UsersService).getAll()
    }

    @Query(() => Schema)
    async getUser(@Arg("id") id: string): Promise<Schema | null> {
        return Container.resolve(UsersService).getById(id)
    }

    @Query(() => Schema)
    async getUserByEmail(@Arg("email") email: string): Promise<Schema | null> {
        return Container.resolve(UsersService).getByEmail(email)
    }

    @Mutation(() => GenericResponse)
    async createUser(@Arg("input") input: UserInput): Promise<{ status: string }> {
        const command = new CreateUserCommand()

        command.first_name = input.first_name
        command.last_name = input.last_name
        command.email = input.email
        command.password = input.password

        Container.resolve(CommandBusService).send(command)
        
        return new GenericResponse("sent")
    }
}

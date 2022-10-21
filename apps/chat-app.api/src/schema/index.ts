import { buildSchema, ResolverData } from "type-graphql"

import UserResolver from './users/resolver'
import RoomResolver from './rooms/resolver'
import MessageResolver from './messages/resolver'

const schema = async () => await buildSchema({
  resolvers: [
    UserResolver,
    RoomResolver,
    MessageResolver
  ],
  emitSchemaFile: true,
})

export default schema

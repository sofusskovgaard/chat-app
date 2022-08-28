import { Field, ObjectType, InputType } from "type-graphql"

import { IMessageEntity } from "chat-app.models/entities/message-entity";
import User from "../users/schema";
import Room from "../rooms/schema";

@ObjectType()
export default class Message implements IMessageEntity {
  @Field()
  id!: string;

  @Field()
  content!: string;

  @Field()
  room_id!: string;

  @Field({ nullable: true })
  room?: Room;

  @Field({ nullable: true })
  author?: User;

  @Field()
  author_id!: string;

  author_name!: string;

  @Field()
  created_at!: Date;

  @Field()
  updated_at!: Date;
}

@InputType()
export class MessageInput implements Pick<Message, "content"> {
  @Field()
  content!: string;
}

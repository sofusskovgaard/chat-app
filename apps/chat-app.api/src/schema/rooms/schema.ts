import { Field, ObjectType, InputType } from "type-graphql"

import { IRoomEntity } from 'chat-app.models/entities/room-entity'

@ObjectType()
export default class Room implements IRoomEntity {
  @Field()
  id!: string;
  
  @Field()
  name!: string;
  
  @Field(() => String, { nullable: true })
  description?: string;
  
  @Field(() => String, { nullable: true })
  cover_image?: string;
  
  @Field()
  archived!: boolean;

  @Field()
  created_at!: Date;

  @Field()
  updated_at!: Date;
}

@InputType()
export class RoomInput implements Pick<Room, "name" | "description" | "cover_image"> {
  @Field()
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;
  
  @Field(() => String, { nullable: true })
  cover_image?: string;
}

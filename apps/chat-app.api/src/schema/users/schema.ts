import { Field, ObjectType, InputType } from "type-graphql"

import { IUserEntity } from "chat-app.models/entities/user-entity";

@ObjectType()
export default class User implements Omit<IUserEntity, "password"> {
  @Field()
  id!: string;
  @Field()
  first_name!: string;
  @Field()
  last_name!: string;
  @Field()
  email!: string;
  @Field()
  created_at!: Date;
  @Field()
  updated_at!: Date;
}

@InputType()
export class UserInput implements Pick<User, "first_name" | "last_name" | "email"> {
  @Field()
  first_name!: string;
  @Field()
  last_name!: string;
  @Field()
  email!: string;
  @Field()
  password!: string;
}

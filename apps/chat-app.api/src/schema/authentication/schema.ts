import { Field, ObjectType, InputType } from "type-graphql"

import { IUserEntity } from "chat-app.models/entities/user-entity";

@InputType()
export class RegisterInput implements Pick<IUserEntity, "first_name" | "last_name" | "email"> {
  @Field()
  first_name!: string;
  @Field()
  last_name!: string;
  @Field()
  email!: string;
  @Field()
  password!: string;
}

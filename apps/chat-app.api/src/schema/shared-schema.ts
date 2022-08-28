import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class GenericResponse {
    constructor(status?: string) {
        if (status) {
            this.status = status
        }
    }
    
    @Field(() => String)
    status!: string
}
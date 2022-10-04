import {Field, ObjectType} from "@nestjs/graphql";
import {Entity} from "../../shared/baseModels/entity.abstract";

@ObjectType()
export class User extends Entity{
    @Field(() => String)
    firstName: string;
    @Field(() => String)
    lastName: string;
    @Field(() => String)
    email: string;
    @Field(() => Date)
    birthday: Date;
    // @Field()
    password: string;
}
import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class CreateUserDto {
    @Field(() => String, {description: "User Firstname"})
    firstName: string;
    @Field(() => String, {description: "User Lastname"})
    lastName: string;
    @Field(() => String, {description: "User Email"})
    email: string;
    @Field(() => Date, {description: "User's Birthdate"})
    birthday: Date;
    @Field(() => String, {description: "Password"})
    password: string
}
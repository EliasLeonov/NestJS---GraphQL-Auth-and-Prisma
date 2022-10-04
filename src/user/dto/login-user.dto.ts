import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class LoginUserDto {
    @Field(() => String, {description: "User email"})
    email: string;
    @Field(() => String, {description: "User password"})
    password: string;
}
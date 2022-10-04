import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class LoginUserResponseDto {
    @Field(() => String, {description: "Authentication Token to make requests"})
    accessToken: string;
}
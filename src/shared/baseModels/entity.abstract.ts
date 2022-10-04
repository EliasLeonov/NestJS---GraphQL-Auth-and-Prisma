import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export abstract class Entity {
    @Field()
    id: string;
    @Field()
    createdAt: Date;
    @Field()
    updatedAt: Date;
    @Field()
    deletedAt?: Date = undefined;
}
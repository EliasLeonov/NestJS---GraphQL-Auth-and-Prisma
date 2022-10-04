import { Module } from '@nestjs/common';
import {GraphqlModule} from "./graphql.module";
import {DatabaseService} from "./prisma/database.service";
import {PrismaService} from "./prisma/prisma.service";
import {AuthModule} from "./auth.module";
import {ConfigModule} from "./config.module";

const databaseServiceProvider = {
    provide: DatabaseService,
    useClass: PrismaService,
};

@Module({
    imports: [GraphqlModule, AuthModule, ConfigModule],
    exports: [databaseServiceProvider, GraphqlModule, AuthModule, ConfigModule],
    providers: [databaseServiceProvider]
})
export class SharedModule {}

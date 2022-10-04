import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {UserRepository} from "./repository/user.repository";
import {UserRepositoryI} from "./repository/user.repository.interface";
import {SharedModule} from "../shared/shared.module";
import {UserResolver} from "./user.resolver";

const userRepositoryProvider = {
  provide: UserRepositoryI,
  useClass: UserRepository,
};

@Module({
  imports: [SharedModule],
  exports: [UserService],
  providers: [UserResolver, UserService, userRepositoryProvider],
})
export class UserModule {}

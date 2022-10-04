import {BaseRepositoryI} from "../../shared/baseModels/base.repository.interface";
import {User} from "../entity/user.entity";

export abstract class UserRepositoryI extends BaseRepositoryI<User>{
    abstract findByEmail(email: string): Promise<User>;
}
import {BaseRepository} from "../../shared/baseModels/base.repository";
import {User} from "../entity/user.entity";
import {UserRepositoryI} from "./user.repository.interface";
import {Injectable} from "@nestjs/common";
import {DatabaseService} from "../../shared/prisma/database.service";

@Injectable()
export class UserRepository extends BaseRepository<User> implements UserRepositoryI{
    constructor(db: DatabaseService) {
        super(db, 'user');
    }
    findByEmail(email: string): Promise<User> {
        return  this.findOne({where: {email}});
    }
}
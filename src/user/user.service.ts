import {Inject, Injectable} from '@nestjs/common';
import {User} from "./entity/user.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import {UserRepositoryI} from "./repository/user.repository.interface";
import {SALT_OR_ROUNDS} from "../shared/utils/constant";
import {BadRequestError} from "../shared/errors/errors";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @Inject(UserRepositoryI) private readonly userRepository: UserRepositoryI,
    ) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        this.checkEmailDoesNotExist(createUserDto.email);
        const passwordEncrypted: string = await this.encryptPassword(createUserDto.password);
        const user = {
            ...createUserDto,
            password: passwordEncrypted
        };
        return this.userRepository.save(user);
    }

    private async encryptPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, SALT_OR_ROUNDS);
    }

    private checkEmailDoesNotExist(email: string) {
        const user = this.userRepository.findByEmail(email);
        if (user) throw new BadRequestError("User email already exist");
    }

    async findByEmail(email: string): Promise<User> {
        return this.userRepository.findByEmail(email);
    }
}

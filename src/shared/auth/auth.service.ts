import {forwardRef, Inject, Injectable, NotFoundException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {User} from "../../user/entity/user.entity";
import {UserService} from "../../user/user.service";
import {LoginUserDto} from "../../user/dto/login-user.dto";

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UserService))
        private userService: UserService,
        private jwtTokenService: JwtService,
    ) {}

    async login(loginUserDto: LoginUserDto){
        const email: string = loginUserDto.email;
        const password: string = loginUserDto.password;
        const user: User = await this.validateUser(email, password);
        if (!user) throw new NotFoundException(`User email or password incorrect`);
        return this.generateUserCredentials(user);
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                return user;
            }
        }
        return null;
    }

    async generateUserCredentials(user: User) {
        const payload = {
            email: user.email,
            sub: user.id,
        };
        return {
            accessToken: this.jwtTokenService.sign(payload, {privateKey: process.env.JWT_SECRET}),
        }
    }
}

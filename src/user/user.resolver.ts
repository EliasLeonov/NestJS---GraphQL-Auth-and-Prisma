import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {User} from "./entity/user.entity";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../shared/auth/jwt-auth.guard";
import {LoginUserResponseDto} from "./dto/login-user.response.dto";
import {LoginUserDto} from "./dto/login-user.dto";
import {AuthService} from "../shared/auth/auth.service";

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) {}

    @Mutation(() => User)
    async createUser(@Args('createUserDto') createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }

    @Mutation(() => LoginUserResponseDto)
    async loginUser(@Args("loginUserDto") loginUserDto: LoginUserDto): Promise<LoginUserResponseDto> {
        return this.authService.login(loginUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Query(()=> String)
    text(@Args('text') text: string): string {
        return text + 'hola';
    }
}
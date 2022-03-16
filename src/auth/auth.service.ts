import { CreateUserDto } from './../user/dto/create-user.dto';
import { comparePassword } from 'src/utils/encode-password';
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    console.log(email, password);
    const user = await this.userService.findOneByEmail(email);
    console.log(comparePassword(password, user.password));
    if (!user || !comparePassword(password, user.password)) {
      console.log('wrong');
      return null;
    }
    return user;
  }
  signIn(user: User) {
    const accessToken = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });
    return {
      access_token: accessToken,
    };
  }
  async registerUser(createUserDto: CreateUserDto) {
    const newUser = await this.userService.create(createUserDto);
    return this.signIn(newUser);
  }
}

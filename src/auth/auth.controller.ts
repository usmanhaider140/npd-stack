import { CreateUserDto } from './../user/dto/create-user.dto';
import { Me } from './guards/me.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req) {
    return this.authService.signIn(req.user);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  profile(@Me() me) {
    return me;
  }
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }
}

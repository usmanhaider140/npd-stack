import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { encodePassword } from 'src/utils/encode-password';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    const hashPassword = encodePassword(createUserDto.password);
    return this.prismaService.user.create({
      data: { ...createUserDto, password: hashPassword },
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findFirst({ where: { id } });
  }

  findOneByEmail(email: string) {
    console.log('findOneByEmail', email);
    return this.prismaService.user.findFirst({ where: { email } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prismaService.user.delete({ where: { id } });
  }
}

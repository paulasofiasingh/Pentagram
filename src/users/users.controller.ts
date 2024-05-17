import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from './dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() {name, projects}: UserDto): void {
    return this.usersService.createUser({name, projects});
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.usersService.getById(+id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() {name, projects}: UserDto): User {
    return this.usersService.updateUser(+id, {name, projects});
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}

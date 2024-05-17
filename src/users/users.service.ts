import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

getUsers(): User[] {
    return this.users;
}

getById(id: number): User {
    return this.users.find((item) => item.id === id);
}

createUser({name, projects}: UserDto){
    this.users.push({
        id: (Math.floor(Math.random() * 2000) + 1),
        name: name,
        projects: projects
    })
}

updateUser(id: number, {name, projects}: UserDto) {
    const user: User = this.getById(id);
    user.name = name;
    user.projects = projects;
    return user;
}

removeUser(id: number){
    const index = this.users.findIndex((user) => user.id === id);
    if (index >= 0){
        this.users.splice(index, 1);
    }
}
}
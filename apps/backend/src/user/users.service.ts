import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

let usersList: User[] = []
let id = 0

@Injectable()
export class UsersService {

  create(createUserDto: CreateUserDto) {
    const newUser: User = {...createUserDto, id: id++, isActive: true, createdAt: new Date(Date.now()), updatedAt: new Date(Date.now())}
    usersList.push(newUser)
    return 'This action adds a new user';
  }

  findAll() {
    const users = usersList.filter(user => user.isActive)
    console.log(users)
    return `This action returns all users`;
  }

  findOne(id: number) {
    const user = usersList.filter(user => user.id === id)
    console.log(user)
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser: User = {...updateUserDto, id: id++, isActive: true, createdAt: new Date(Date.now()), updatedAt: new Date(Date.now())}
    if (updatedUser)
      usersList.push(updatedUser)
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    const deletedUser = usersList.find(user => user.id === id)
    if (deletedUser)
      usersList[usersList.indexOf(deletedUser)] = {...deletedUser, isActive: false}
    return `This action removes a #${id} user`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';

let cartsList: Cart[] = []
let id = 0

@Injectable()
export class CartService {
  create(createCartDto: CreateCartDto) {
    const newCart: Cart = { ...createCartDto, id: id++, updatedAt: new Date(Date.now()) }
    cartsList.push(newCart)
    return 'This action adds a new cart';
  }

  findAll() {
    cartsList.forEach( cart => {
      console.log(cart)
      console.log(cart.items)
    })
    return `This action returns all cart`;
  }

  findOne(id: number) {
    const cart = cartsList.find(cart => cart.id === id)
    console.log(cart)
    console.log(cart?.items)
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}

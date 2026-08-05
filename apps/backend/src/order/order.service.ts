import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

let ordersList: Order[] = []
let id = 0

@Injectable()
export class OrderService {
  create(createOrderDto: CreateOrderDto) {
    const newOrder: Order = { ...createOrderDto, id: id++, createdAt: new Date(Date.now()) }
    ordersList.push(newOrder)
    return 'This action adds a new order';
  }

  findAll() {
    ordersList.forEach( order => {
      console.log(order)
      console.log(order.items)
    })
    return `This action returns all order`;
  }

  findOne(id: number) {
    const order = ordersList.find(order => order.id === id)
    console.log(order)
    console.log(order?.items)
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

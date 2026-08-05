import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { OrderItem } from '../entities/order-item.entity';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    userId!: number
    items!: OrderItem[]
    status!: string
    totalAmount!: number
}

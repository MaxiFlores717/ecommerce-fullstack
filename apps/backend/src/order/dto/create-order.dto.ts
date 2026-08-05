import { OrderItem } from "../entities/order-item.entity"

export class CreateOrderDto {
    userId!: number
    items!: OrderItem[]
    status!: string
    totalAmount!: number
}

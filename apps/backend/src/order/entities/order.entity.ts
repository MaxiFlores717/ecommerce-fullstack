import { OrderItem } from "./order-item.entity"

export class Order {
    id!: number
    userId!: number
    items!: OrderItem[]
    status!: string
    totalAmount!: number
    createdAt!: Date
}

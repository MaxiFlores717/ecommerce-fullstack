import { CartItem } from "./cart-item.entity"

export class Cart {
    id!: number
    userId!: number
    items!: CartItem[]
    updatedAt!: Date
}

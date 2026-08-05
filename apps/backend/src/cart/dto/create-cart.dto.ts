import { CartItem } from "../entities/cart-item.entity"

export class CreateCartDto {
    userId!: number
    items!: CartItem[]
}

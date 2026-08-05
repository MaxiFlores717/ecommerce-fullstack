import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDto } from './create-cart.dto';
import { CartItem } from '../entities/cart-item.entity';

export class UpdateCartDto extends PartialType(CreateCartDto) {
    userId!: number
    items!: CartItem[]
}

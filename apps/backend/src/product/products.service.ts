import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

let productsList: Product[] = []
let id = 0

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    const newProduct: Product = {...createProductDto, id: id++, isActive: true, createdAt: new Date(Date.now()), updatedAt: new Date(Date.now())}
    productsList.push(newProduct)
    return 'This action adds a new product';
  }

  findAll() {
    const products = productsList.filter(product => product.isActive)
    console.log(products)
    return `This action returns all products`;
  }

  findOne(id: number) {
    const product = productsList.filter(product => product.id === id)
    console.log(product)
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const updatedProduct: Product = {...updateProductDto, id: id++, isActive: true, createdAt: new Date(Date.now()), updatedAt: new Date(Date.now())}
    if (updatedProduct)
      productsList.push(updatedProduct)
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    const deletedProduct = productsList.find(product => product.id === id)
    if (deletedProduct)
      productsList[productsList.indexOf(deletedProduct)] = {...deletedProduct, isActive: false}
    return `This action removes a #${id} product`;
  }
}

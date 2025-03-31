import { Injectable } from '@angular/core';
import { Product } from '../../component/model/product';
import { PRODUCTS } from '../../mock/mook.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product[] = PRODUCTS;

  getAll(): Product[]{
    return this.product
  }

  getOffert(): Product[]{
    return this.product.filter((product)=> product.previousPrice)
  }

  getById(id: string):Product | undefined{
    return this.product.find((product)=> product.id === id)
  };

}

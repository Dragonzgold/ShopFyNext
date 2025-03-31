import { Component, inject, input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../../mock/mook.component';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../core/service/product.service';
import { ProductCart } from '../model/product-cart';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  id = input<string>('');
  product?: Product;
  productService = inject(ProductService);

  ngOnInit(): void {
    this.product = this.productService.getById(this.id());
  }

  addToCart() {
    const cartProducts: ProductCart[] =
      JSON.parse(localStorage.getItem('productsCart') as string) || [];

    const matched = cartProducts.find(
      ({ product, quantity }) => product.id === this.id()
    );

    if (matched) {
      matched.quantity++;
    } else {
      cartProducts.push({ product: this.product!, quantity: 1 });
    }
    localStorage.setItem('productsCart', JSON.stringify(cartProducts));
  }
}

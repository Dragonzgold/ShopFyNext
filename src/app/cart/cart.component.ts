import { Component, OnInit } from '@angular/core';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductCart } from '../component/model/product-cart';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [ProductCartComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartProducts: ProductCart[] = [];
  total: number = 0;

  ngOnInit(): void {
    const storageProduct: ProductCart[] = JSON.parse(localStorage.getItem("productsCart") as string) || []

    this.cartProducts = storageProduct;

    if(this.cartProducts.length <= 0){
      this.total = this.cartProducts.reduce((acc,val)=> acc + val.product.price * val.quantity, 0)
    };
  }

  updateTotal() {
    const storagedProducts: ProductCart[] =
      JSON.parse(localStorage.getItem('productsCart') as string) || [];

    this.cartProducts = storagedProducts;

    let total = 0;

    this.cartProducts.forEach((cartProduct) => {
      total +=
        Math.round(cartProduct.product.price * cartProduct.quantity * 100) /
        100;
    });

    this.total = total;
  }

}

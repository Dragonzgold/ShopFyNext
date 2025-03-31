import { Component, input, OnInit, output, signal } from '@angular/core';
import { ProductCart } from '../../component/model/product-cart';
import { Product } from '../../component/model/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-cart',
  imports: [CurrencyPipe],
  templateUrl: './product-cart.component.html',
})
export class ProductCartComponent implements OnInit {
  product = input.required<Product>();
  quantity = input.required<number>();
  quantitySignal = signal<number>(0);
  quantityUpdatedEvent = output();

  ngOnInit(): void {
    this.quantitySignal.set(this.quantity())
  }

  removeProduct(){
    const storagedProduct: ProductCart[] = JSON.parse(localStorage.getItem('productsCart') as string);
    const filterCartProduct = storagedProduct.filter((cartProduct)=> cartProduct.product.id !== this.product().id); 
    localStorage.setItem('productsCart',  JSON.stringify(filterCartProduct))
  }

  incrementQuantity() {
    this.quantitySignal.update((value) => value + 1);

    const storagedProducts: ProductCart[] = JSON.parse(
      localStorage.getItem('productsCart') as string
    );
    const cartProduct = storagedProducts.find(
      (cartProduct) => cartProduct.product.id === this.product().id
    ) as ProductCart;
    cartProduct.quantity++;

    localStorage.setItem('productsCart', JSON.stringify(storagedProducts));

    this.quantityUpdatedEvent.emit();
  }

  decrementQuantity() {
    if (this.quantitySignal() == 1) return;

    this.quantitySignal.update((value) => value - 1);

    const storagedProducts: ProductCart[] = JSON.parse(
      localStorage.getItem('productsCart') as string
    );
    const cartProduct = storagedProducts.find(
      (cartProduct) => cartProduct.product.id === this.product().id
    ) as ProductCart;
    cartProduct.quantity--;

    localStorage.setItem('productsCart', JSON.stringify(storagedProducts));

    this.quantityUpdatedEvent.emit();
  }
}

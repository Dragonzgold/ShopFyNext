import { Component, input } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-component',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-component.component.html',
})
export class ProductComponentComponent {
  product = input.required<Product>()
}

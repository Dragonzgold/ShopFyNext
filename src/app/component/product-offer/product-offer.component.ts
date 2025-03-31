import { Component, input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-offer',
  imports: [CurrencyPipe, PercentPipe, RouterLink],
  templateUrl: './product-offer.component.html',
})
export class ProductOfferComponent implements OnInit {
  product = input.required<Product>();
  discount = 0;

  ngOnInit(): void {
    const previousPrice = this.product().previousPrice;
    const price = this.product().price;

    if(previousPrice){
      this.discount = (previousPrice - price) / previousPrice
    }
  }
}

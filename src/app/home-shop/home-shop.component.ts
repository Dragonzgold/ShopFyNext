import { Component, inject, Injectable, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { PRODUCTS } from '../mock/mook.component';
import { Product } from '../component/model/product';
import { ProductComponentComponent } from '../component/product-component/product-component.component';
import { ProductOfferComponent } from '../component/product-offer/product-offer.component';
import { ProductService } from '../core/service/product.service';

@Component({
  selector: 'app-home-shop',
  imports: [ProductComponentComponent, ProductOfferComponent],
  templateUrl: './home-shop.component.html',
})
export class HomeShopComponent implements OnInit {
  productService = inject(ProductService);
  products: Product[] = this.productService.getAll()
  productOffers: Product[] = this.productService.getOffert();

  ngOnInit(): void {
    setTimeout(()=>{
      initFlowbite();
    }, 100)
  }
}

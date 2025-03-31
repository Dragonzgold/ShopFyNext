import { Routes } from '@angular/router';
import { HomeShopComponent } from './home-shop/home-shop.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { PaymentComponentComponent } from './payment/payment-component/payment-component.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeShopComponent
    },
    {
        path:"cart",
        component: CartComponent
    },
    {
        path:"products/:id",
        component: ProductComponent
    },
    {
        path: "payment/:succes",
        component: PaymentComponentComponent
    }
];

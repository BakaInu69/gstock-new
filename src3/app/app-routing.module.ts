import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './productlisting/product/product.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', loadChildren: 'app/productlisting/productlisting.module#ProductlistingModule' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: 'shoppingcart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent }
]

export const routing = RouterModule.forRoot(routes)

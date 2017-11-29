import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './productlisting/product/product.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './dashboard/account.component';
import { CreditComponent } from './dashboard/credit.component';
import { WishlistComponent } from './dashboard/wishlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products/:name', loadChildren: 'app/productlisting/productlisting.module#ProductlistingModule' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: 'shoppingcart', component: CartComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'dashboard/account', component: AccountComponent },
    { path: 'dashboard/credit-wallet', component: CreditComponent },
    { path: 'dashboard/wishlist', component: WishlistComponent }
];

export const routing = RouterModule.forRoot(routes)

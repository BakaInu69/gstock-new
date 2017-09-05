import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import { ProductlistingModule } from './productlisting/productlisting.module';
import { ProductModule } from './productlisting/product.module';
import { LoginregisterModule } from './buyer/loginregister.module';
import { RegisterModule } from './buyer/register.module';
import { FooterModule } from './footer/footer.module';
import { ResetModule } from './buyer/reset.module';
import { CartModule } from './cart/cart.module';
import { MerchantModule } from './merchant/merchant.module';
import { CheckoutModule } from './checkout/checkout.module';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductlistingModule,
    ProductModule,
    HomeModule, NavbarModule,
    LoginregisterModule,
    RegisterModule,
    FooterModule,
    ResetModule,
    CartModule,
    MerchantModule,
    CheckoutModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app-root initiated')
  }
}

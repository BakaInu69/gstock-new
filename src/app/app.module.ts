import { CheckoutModule } from './checkout/checkout.module';
import { CartModule } from './cart/cart.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CartService } from './cart/cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { MerchantModule } from './merchant/merchant.module';
import { HttpClientModule } from '@angular/common/http';
import { SlickModule } from 'ngx-slick';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    NavbarModule,
    HttpClientModule,
    CheckoutModule,
    FooterModule,
    routing,
    CartModule,
    DashboardModule,
    MerchantModule,
    SlickModule.forRoot()
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('app-root initiated')
  }
}

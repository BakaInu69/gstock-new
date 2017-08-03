import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';

@NgModule({
    imports: [CheckoutRoutingModule],
    declarations: [CheckoutComponent],
    exports: [CheckoutComponent],
})
export class CheckoutModule { }

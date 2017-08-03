import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
    imports: [CartRoutingModule],
    declarations: [CartComponent],
    exports: [CartComponent],
})
export class CartModule { }

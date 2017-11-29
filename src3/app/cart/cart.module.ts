import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [CartComponent],
})
export class CartModule { }

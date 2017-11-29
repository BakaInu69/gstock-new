import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { AgmCoreModule, } from '@agm/core';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAjYfVTwmR8kV_fr9-gMvBsJKWKuNRZkl8',
            libraries: ['places']
        }),

    ],
    declarations: [CheckoutComponent]
})
export class CheckoutModule { }

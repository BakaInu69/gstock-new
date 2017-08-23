import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [CheckoutRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAjYfVTwmR8kV_fr9-gMvBsJKWKuNRZkl8'
        })
    ],
    declarations: [CheckoutComponent],
    exports: [CheckoutComponent]
})
export class CheckoutModule { }

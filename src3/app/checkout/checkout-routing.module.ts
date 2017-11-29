import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: CheckoutComponent, pathMatch: 'full' }
        ])
    ],
    exports: [RouterModule]
})
export class CheckoutRoutingModule { }

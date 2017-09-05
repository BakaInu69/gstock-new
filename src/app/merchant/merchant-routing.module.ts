import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MerchantComponent } from './merchant.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'merchant', component: MerchantComponent }
        ])
    ],
    exports: [RouterModule]
})
export class MerchantRoutingModule { }

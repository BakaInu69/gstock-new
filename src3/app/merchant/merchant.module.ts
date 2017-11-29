import { NgModule } from '@angular/core';
import { MerchantComponent } from './merchant.component';
import { MerchantRoutingModule } from './merchant-routing.module';

@NgModule({
    imports: [MerchantRoutingModule],
    declarations: [MerchantComponent],
    exports: [MerchantComponent],
})
export class MerchantModule { }

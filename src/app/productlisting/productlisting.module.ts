import { NgModule } from '@angular/core';
import { ProductlistingComponent } from './productlisting.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    imports: [ProductRoutingModule],
    declarations: [ProductlistingComponent],
    exports: [ProductlistingComponent],
})
export class ProductlistingModule { }

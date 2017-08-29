import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductlistingComponent } from './productlisting.component';
import { ProductComponent } from './product.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'productlisting', component: ProductlistingComponent },
            { path: 'product', component: ProductComponent }
        ])
    ],
    exports: [RouterModule]
})
export class ProductRoutingModule { }

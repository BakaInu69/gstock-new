import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule, } from './product/product.module';
import { NgModule } from '@angular/core';
import { ProductlistingComponent } from './productlisting.component';
import { CommonModule } from '@angular/common'

const routes: Routes = [
    {
        path: '', component: ProductlistingComponent, pathMatch: 'full'
    },
    {
        path: 'product/:productid', component: ProductComponent
    }]
@NgModule({
    imports: [
        ProductModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ProductlistingComponent],
})
export class ProductlistingModule { }

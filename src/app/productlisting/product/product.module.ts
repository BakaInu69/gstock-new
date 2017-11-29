import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SlickModule } from 'ngx-slick';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SlickModule
    ],
    declarations: [ProductComponent],
    exports: [ProductComponent],
})
export class ProductModule { }

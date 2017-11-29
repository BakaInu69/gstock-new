import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [ProductComponent],
    exports: [ProductComponent],
})
export class ProductModule { }

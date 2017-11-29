import { UserModule } from '../user/user.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UserModule.forRoot(),
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
})
export class NavbarModule { }

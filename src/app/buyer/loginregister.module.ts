import { NgModule } from '@angular/core';
import { LoginregisterComponent } from './loginregister.component';
import { LoginregisterRoutingModule } from './buyer-routing.module';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [LoginregisterRoutingModule, FormsModule, ReactiveFormsModule,CommonModule, BrowserModule],
    declarations: [LoginregisterComponent],
    exports: [LoginregisterComponent],
})
export class LoginregisterModule { }
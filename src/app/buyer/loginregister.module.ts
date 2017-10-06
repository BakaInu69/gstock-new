import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LoginregisterComponent } from './loginregister.component';
import { LoginregisterRoutingModule } from './buyer-routing.module';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { LoginService } from './loginregister.service';
import { CustomFormsModule } from 'ng2-validation'




@NgModule({
    imports: [LoginregisterRoutingModule, HttpModule, FormsModule, ReactiveFormsModule, BrowserModule, CustomFormsModule],
    declarations: [LoginregisterComponent],
    exports: [LoginregisterComponent],
    providers: [LoginService],
})
export class LoginregisterModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register.component';
import { LoginregisterRoutingModule } from './buyer-routing.module';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { RegisterService }    from './register.service';
import { CustomFormsModule } from 'ng2-validation'

@NgModule({
    imports: [LoginregisterRoutingModule, FormsModule, ReactiveFormsModule, BrowserModule, HttpModule,CustomFormsModule],
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
    providers: [RegisterService],
})
export class RegisterModule { }

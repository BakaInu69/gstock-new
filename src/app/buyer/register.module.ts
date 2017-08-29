import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { LoginregisterRoutingModule } from './buyer-routing.module';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

@NgModule({
    imports: [LoginregisterRoutingModule, FormsModule, ReactiveFormsModule],
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
})
export class RegisterModule { }

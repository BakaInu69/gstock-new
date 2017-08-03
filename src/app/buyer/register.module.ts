import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { LoginregisterRoutingModule } from './buyer-routing.module';

@NgModule({
    imports: [LoginregisterRoutingModule],
    declarations: [RegisterComponent],
    exports: [RegisterComponent],
})
export class RegisterModule { }

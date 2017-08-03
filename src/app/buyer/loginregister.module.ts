import { NgModule } from '@angular/core';
import { LoginregisterComponent } from './loginregister.component';
import { LoginregisterRoutingModule } from './buyer-routing.module';

@NgModule({
    imports: [LoginregisterRoutingModule],
    declarations: [LoginregisterComponent],
    exports: [LoginregisterComponent],
})
export class LoginregisterModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginregisterComponent } from './loginregister.component';
import { RegisterComponent } from './register.component';
import { ResetComponent } from './reset.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'login', component: LoginregisterComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'reset-password', component: ResetComponent }
        ])
    ],
    exports: [RouterModule]
})
export class LoginregisterRoutingModule{ }

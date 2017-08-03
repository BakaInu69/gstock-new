import { NgModule } from '@angular/core';
import { ResetComponent } from './reset.component';
import { LoginregisterRoutingModule } from './buyer-routing.module';

@NgModule({
    imports: [LoginregisterRoutingModule],
    declarations: [ResetComponent],
    exports: [ResetComponent],
})
export class ResetModule { }

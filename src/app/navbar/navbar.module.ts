import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
    imports: [NavbarRoutingModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
})
export class NavbarModule { }

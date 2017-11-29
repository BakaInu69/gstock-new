import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';

@NgModule({
    imports: [RouterModule],
    declarations: [FooterComponent],
    exports: [FooterComponent],
})
export class FooterModule { }

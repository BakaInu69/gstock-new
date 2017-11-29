import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { AccountComponent } from './account.component';
import { CreditComponent } from './credit.component';
import { DashboardService} from './dashboard.service';
import { WishlistComponent} from './wishlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    declarations: [DashboardComponent,AccountComponent,CreditComponent, WishlistComponent],
    providers: [DashboardService]
})
export class DashboardModule { }

import { environment } from '../../environments/environment';
import { CartService } from '../cart/cart.service';
import { errorHandler } from '../_helper/errorHandler';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent {
  private currentUser;
  private cart = [];
  private totalPriceAndQty
  private url;
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _cartService: CartService) {
    this.url = environment.apiUrl
    this.currentUser = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).user : null
    if (!this.currentUser) {
      this._userService.subject.subscribe(user => {
        if (user) {
          this.currentUser = user['user']
        } else {
          this.currentUser = null
        }
        this._router.navigate(['/home']);
      },
        err => errorHandler(err))
    }
    if (this.currentUser) {
      this._cartService.getCart(this.currentUser._id).subscribe(items => {
        this.cart = this._cartService.joinVariants(items)
        this.totalPriceAndQty = this._cartService.totalQtyAndPrice(this.cart)
      })
    }
  }


  private logout() {
    this._userService.logout()
  }

}

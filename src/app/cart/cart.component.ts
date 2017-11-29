import { NavbarComponent } from '../navbar/navbar.component';
import { environment } from '../../environments/environment';
import { errorHandler } from '../_helper/errorHandler';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent {
  private cart = []
  private totalPriceAndQty;
  private url = environment.apiUrl
  constructor(
    private _cartService: CartService
  ) {
    const currentUser = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).user : null
    this._cartService.getCart(currentUser._id).subscribe(items => {
      this.cart = this._cartService.joinVariants(items)
      this.totalPriceAndQty = this._cartService.totalQtyAndPrice(this.cart)
    })
  }

  ngAfterViewInit() {

  }
}

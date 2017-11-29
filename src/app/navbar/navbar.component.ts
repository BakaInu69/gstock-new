import { environment } from '../../environments/environment';
import { CartService } from '../cart/cart.service';
import { errorHandler } from '../_helper/errorHandler';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { NavbarService } from '../navbar/navbar.service';
import { ProductListingService } from '../productlisting/productlisting.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  providers: [NavbarService, ProductListingService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent {
  private currentUser;
  private cart = [];
  private totalPriceAndQty;
  private url;
  private searchForm: FormGroup;
  public query = '';
  constructor(
    private _userService: UserService,
    private _navbarservice: NavbarService,
    private _productlistingservice: ProductListingService,
    private fb: FormBuilder,
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
        this.cart = this._cartService.joinVariants(items);
        this.totalPriceAndQty = this._cartService.totalQtyAndPrice(this.cart)
      })
    }
  }

  ngOnInit() {
  this.formInit();
}

  private formInit() {
    this.searchForm = this.fb.group({
      'name': [],
    });
  }
  private searchProduct() {
    this.query = '&name=' + this.searchForm.value['name'];
    console.log(this.query);
    this.list();
  }
  private list() {
    this._productlistingservice.query = this.searchForm.value.name;
    console.log(this._productlistingservice.query)
    this._router.navigate(['/products/' + this.searchForm.value.name]);
  }
  private logout() {
    this._userService.logout()
  }

}

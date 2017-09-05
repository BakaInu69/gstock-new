import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';

import * as $ from 'jquery';
import 'slick-carousel/slick/slick';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  export class RegisterComponent{
  model: any = {};
  loading = false;
  title = 'Gstock';


  constructor(
      private router: Router,
      private userService: UserService,
      private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
        .subscribe(
            data => {
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/login']);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });
  }

  ngOnInit() {
    (<any>$)(function() {
      var checkbox = $("#merchant");
      var hidden = $("#shopname");
      hidden.hide();

      checkbox.change(function() {
        if (checkbox.is(':checked')) {
          hidden.show()
        } else {
          hidden.hide()
        }
      });
    });
  }
}

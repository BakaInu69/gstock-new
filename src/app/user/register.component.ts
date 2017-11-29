import { errorHandler } from '../_helper/errorHandler';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  private loading = false;
  private registerForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _userService: UserService
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      userGroup: [false,],
      confirmPassword: ['', Validators.required],
      // lastName: ['', Validators.required],
      shop: ['',],
    });
  }
  private register() {
    this.loading = true;
    const values = JSON.parse(JSON.stringify(this.registerForm.value))
    values['userGroup'] = this.registerForm.value.userGroup ? 'merchant' : 'buyer'
    this._userService.registerUser(values)
      .subscribe(
      data => {
        alert(JSON.stringify(data));
        // this.router.navigate(['/login']);
      },
      err => errorHandler(err))
  }
  ngOnInit() { }
}

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { errorHandler } from '../_helper/errorHandler';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  loading = false;
  private loginForm: FormGroup
  private formControl
  constructor(
    private _userService: UserService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.formControl = this.loginForm.controls
  }
  private login() {
    this._userService.loginUser(this.loginForm.value).subscribe(
      data => {
        localStorage.setItem('user', JSON.stringify(data))
        this._userService.emitUser();
      },
      err => errorHandler(err)
    )
  }
  ngOnInit() {

  }
}

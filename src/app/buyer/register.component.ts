import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

import * as $ from 'jquery';
import 'slick-carousel/slick/slick';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  export class RegisterComponent{
  model: any = {};
  loading = false;
  title = 'Gstock';
  registerForm:FormGroup;
  constructor(public fb:FormBuilder,private _RegisterService: RegisterService,private router: Router){
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      confirmPassword: ['', Validators.required ],
      userGroup: ['', Validators.required ],
    });
  }

  submit(){
    console.log(this.registerForm.value);
    this._RegisterService.Register(this.registerForm.value)
        .subscribe(
        (data)=> {
          alert('Your account has been created!')
          this.router.navigate(['login'])
          console.log("1")
        },
        (err)=>{
          console.log(err.text())
        },
        );
    console.log("2")
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

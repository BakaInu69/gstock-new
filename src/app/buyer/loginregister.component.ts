import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './loginregister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
  export class LoginregisterComponent{
  model: any = {};
  loading = false;
  returnUrl: string;
  title = 'Gstock';
  loginForm:FormGroup;
  constructor(public fb:FormBuilder,private _LoginService: LoginService,private router: Router){
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  submit(){
    console.log(this.loginForm.value);
    this._LoginService.Login(this.loginForm.value)
        .subscribe(
            (data)=> {
              alert('Your have successfully logged in!')
              this.router.navigate([''])
              console.log("1")
            },
            (err)=>{
              console.log(err.text())
            },
        );
    console.log("2")
  }

  ngOnInit() {

  }

}

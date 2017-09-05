import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
  export class LoginregisterComponent implements OnInit{
  model: any = {};
  loading = false;
  returnUrl: string;
  title = 'Gstock';

  ngOnInit() {

  }

}

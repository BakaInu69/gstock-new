import { Component } from '@angular/core';
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

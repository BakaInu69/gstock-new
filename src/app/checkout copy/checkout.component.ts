import { Component } from '@angular/core';

@Component({
  selector: 'app-Checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent{
  title = 'Gstock';
  lat: number = 51.678418;
  lng: number = 7.809007;
}

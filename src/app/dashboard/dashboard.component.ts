import { NavbarComponent } from '../navbar/navbar.component';
import { environment } from '../../environments/environment';
import { errorHandler } from '../_helper/errorHandler';
import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardComponent]

})
export class DashboardComponent implements OnInit{
  ngOnInit() {
    $('#ex2').slider({})
    $('.footer-category').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });
  }


}

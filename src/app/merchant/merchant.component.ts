import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel/slick/slick';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent{
  title = 'Gstock';
  ngOnInit() {
    (<any>$('.product-slider-home')).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      prevArrow: false,
      nextArrow: false
    });
    (<any>$('.footer-category')).slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });
    (<any>$('ul.tabs li')).click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  }
}

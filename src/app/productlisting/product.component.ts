import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel/slick/slick';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
  export class ProductComponent{
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
    (<any>$('.product-image')).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-slider',
      speed: 1000,
      cssEase: 'linear',
      prevArrow: false,
      nextArrow: false,
      appendDots: '.appendDots'
    });
    (<any>$('.product-slider')).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product-image',
      dots: true,
      speed: 1500,
      vertical: true,
      focusOnSelect: true,
      autoplay: true,
      prevArrow: '<div id="slick-prev" style="position: absolute;bottom: -47px;width: 30px;height: 30px;background: #a5a5a5; color: #fff"><i class="fa fa-angle-left" aria-hidden="true" style="font-size: 24px;color: #fff;margin-left: 9px;margin-top: 2px;"></i></div>',
      nextArrow: '<div id="slick-next" style="position: absolute;bottom: -47px;left: 33px;width: 30px;height: 30px;background: #a5a5a5;  color: #fff"><i class="fa fa-angle-right" aria-hidden="true" style="font-size: 24px;color: #fff;margin-left: 9px;margin-top: 2px;"></i></div>',
      appendDots: '.appendDots'
    });

  }
}

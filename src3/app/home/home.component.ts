import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Gstock';
  private tabs = [
    'HOT',
    'DRESSES',
    'TOPS & TEES',
    'SKIRTS',
    'BOTTOMS',
    'INTIMATES',
    'PLUS SIZE',
  ]
  private images = ['assets/images/l1p1.jpg', 'assets/images/l1p2.jpg', 'assets/images/l1p3.jpg', 'assets/images/l1p4.jpg', 'assets/images/l1p5.jpg', 'assets/images/l1p1.jpg', 'assets/images/l1p2.jpg', 'assets/images/l1p2.jpg', 'assets/images/l1p2.jpg']
  private floor = [
    {
      'name': 'WOMEN\'s FASHION',
      'content': this.images,
      'image': 'assets/images/heels.png',
    },
    {
      'name': 'MEN\'s FASHION',
      'content': this.images,
      'image': 'assets/images/bag.png',
    },
    {
      'name': 'BABY & KIDS',
      'content': this.images,
      'image': 'assets/images/stroller.png',
    },
    {
      'name': 'HOME & LIVING',
      'content': this.images,
      'image': 'assets/images/sofa.png',
    },
    {
      'name': 'DIGITAL & MOBILE',
      'content': this.images,
      'image': 'assets/images/headphone.png',
    },]
  constructor() {

  }
  ngOnInit() {
    $('ul.tabs li').click(function () {
      const tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
      $(this).addClass('current');
      $('#' + tab_id).addClass('current');
    })
  }
  ngAfterViewInit() {
    $('.merchant-carousel').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      prevArrow: '',
      nextArrow: '',
    });
    $('.product-slider-home').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      // swipe: false,
      prevArrow: '',
      nextArrow: '',
    });
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



  test(level, tabIndex) {
    console.log(level, tabIndex)
    // $($('.product-slider-home').toArray()[level]).slick('slickAdd', '<div class="product-slider-home"><img src="assets/images/l1p2.jpg" width="100%" /><div class="product-info"><p>DAONSHOP Women`s pants collection / skinny jeans / destroyed jeans</p><div class="pull-left price">$19.00</div><div class="pull-right price"><a href="#"><i class="fa fa-truck"></i></a></div></div></div></div>')
    $($('.product-slider-home').toArray()[level]).slick('slickGoTo', tabIndex * 4)
  }
}

import { ProductListingService } from './productlisting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css'],
  providers: [ProductListingService]
})
export class ProductlistingComponent implements OnInit {
  private products = [];
  constructor(
    private _productListingService: ProductListingService
  ) {
    console.log('Product listing')
    this._productListingService.getProduct().subscribe((data) => {
      console.log(data)
      this.products = data['docs']

    })
  }
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

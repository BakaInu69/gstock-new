import { ProductListingService } from './productlisting.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css'],
  providers: [ProductListingService]
})
export class ProductlistingComponent implements OnInit {
  private products = [];
  private mainimage =[];
  constructor(
    private _productListingService: ProductListingService,
    private aR: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.aR.params.subscribe(
      params => {
        this._productListingService.getProduct(params.name).subscribe((data) => {
          console.log(data)

          this.products = data['docs'];
          console.log("this is products",this.products)
        })
      }

    )
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

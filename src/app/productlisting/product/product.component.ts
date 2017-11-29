import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { errorHandler } from '../../_helper/errorHandler';
import { ProductDetailService } from './productDetail.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductDetailService]
})
export class ProductComponent implements OnInit {
  private url = environment.apiUrl;
  private selected;
  private variant;
  private productDetail;
  private price;
  private category = ['', '', ''];
  private carousel = [
  ];
  private slideConfigmainslider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.vert-slider',
    dots: false,
    fade: true,
    speed: 1000,
    cssEase: 'linear',
    infinite: true,
    //prevArrow: false,
   // nextArrow: false,
    appendDots: '.appendDots'};

  private slideConfigvertslider = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.main-slider',
    arrows: false,
    dots: false,
    speed: 1000,
    infinite: true,
    vertical: true,
    focusOnSelect: true,
    //prevArrow: '<div id="slick-prev"  x style="position: absolute;bottom: -47px;width: 30px;height: 30px;background: #a5a5a5; color: #fff"><i class="fa fa-angle-left" aria-hidden="true" style="font-size: 24px;color: #fff;margin-left: 9px;margin-top: 2px;"></i></div>',
    //nextArrow: '<div id="slick-next" style="position: absolute;bottom: -47px;left: 33px;width: 30px;height: 30px;background: #a5a5a5;  color: #fff"><i class="fa fa-angle-right" aria-hidden="true" style="font-size: 24px;color: #fff;margin-left: 9px;margin-top: 2px;"></i></div>',
    appendDots: '.appendDots'}
  constructor(
      private _route: ActivatedRoute,
      private _productDetailSerivce: ProductDetailService,
      private sanitizer: DomSanitizer
  ) {
    console.log('Product Component initialized')

    this._route.params
        .subscribe(
            (data:any) => this._productDetailSerivce.productDetail(data.productid)
                .subscribe(
                    (detail:any) => {
                      console.log(detail)
                      this.productDetail = detail.docs[0];
                      let photoUrl="";
                      /*this.category = detail['detail'].category.split(',').slice(1)*/
                      this.carousel = this.productDetail.brief.images.map(
                          (data,i)=>{
                            photoUrl=this.url+"/uploads/user/"+ this.productDetail.merchant_id._id+'/products/' + this.productDetail._id +"/" + data
                            return{img:photoUrl};
                          }
                      )


                      // this.variantSelected(this.productDetail.variants[0], 0)
                    },

                    err => errorHandler(err)),
            err => errorHandler(err))

  }
  ngOnInit() {

  }

  //private variantSelected(variant, i) {
  //  this.variant = variant
  //  this.price = this.variant.uP
  //  this.selected = i
  //  this.loadAllImages(this.productDetail._id, variant, (imageArray) => {
 //     variant.imageArray = imageArray
  //    variant.imageArray.forEach((imageUrl, index) => {
  //      $('.thumbnail-image').toArray()[index]['src'] = imageUrl
  //      $('.thumbnail-image').toArray()[index + 4]['src'] = imageUrl
  //    })
  //  })
  //}
  //private loadAllImages(id, variant, cb) {
  //  if (variant.imageArray) {
  //    const imageArray = variant.imageArray;
  //    cb(imageArray)
  //    return
  //  }
  //  return this._productDetailSerivce.loadAllImages(id, variant.SKU)
  //      .subscribe(
  //          data => {
  //            const imageArray = data.map((blob) => this.createObjectURL(blob))
  //            cb(imageArray)
  //          },
  //          err => errorHandler(err)
  //      )
//
  //}
  private createObjectURL(blob) {
    const urlCreator = window.URL;
    return urlCreator.createObjectURL(blob)

  }
  private addToCart() {
    const product = {
      'productID': this.productDetail._id,
      'merchantID': this.productDetail.merchant_id._id,
      'buyerID': JSON.parse(localStorage.getItem('user')).user._id,
      'SKU': this.productDetail.variants.sku,
      'qty': 1
    };
    this._productDetailSerivce.addToCart(product).subscribe(
        data => alert(data),
        err => errorHandler(err)
    )
  }
}

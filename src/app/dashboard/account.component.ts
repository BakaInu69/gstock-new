import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { errorHandler } from '../_helper/errorHandler';
import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

})
export class AccountComponent implements OnInit{
  private buyerForm: FormGroup;
  private buyer = [];
  private picture_url = environment.apiUrl;
  constructor(
      private _DashboardService: DashboardService,
      private fb: FormBuilder
  ) {
    this.buyerForm = this.fb.group({
      suffix: ['', Validators.required],
      last_name: ['', Validators.required],
      middle_name: ['', Validators.required],
      first_name: ['', Validators.required],
      prefix: ['', Validators.required],
      gender: ['', Validators.required],
      DOB: ['', Validators.required],
      profile_pic_url: ['', Validators.required],
      email_for_contact: ['', Validators.required],
      mobile_no: ['', Validators.required],
      addressline1: ['', Validators.required],
      addressline2: ['', Validators.required],
      addressline3: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required],
      state_province: ['', Validators.required],
    });

    {
      this._DashboardService.getBuyerData().subscribe((data:any) => {
        this.picture_url+=data.profile.profile_pic_url;
        const merged = Object.assign(data['location'],data['contact'],data['profile']);
        this.buyerForm.patchValue(merged)
        console.log(data)
      })
    }
  }


  private uploadImage(item) {
    const blob = new Blob(item.files);
    const formData = new FormData();
      formData.append('profilePic', blob);
      console.log(formData)
    this._DashboardService.imageUpload(formData)
       .subscribe(
           image => { console.log('image uploaded'); },
           err => errorHandler(err)
        );
  }
  private updateBuyer(e) {
    console.log(e)
    e.preventDefault()
    e.stopPropagation()
    let result = {};

    var profile={};
    profile["DOB"]=this.buyerForm.value.DOB;
    profile["gender"]=this.buyerForm.value.gender;
    profile["prefix"]=this.buyerForm.value.prefix;
    profile["first_name"]=this.buyerForm.value.first_name;
    profile["middle_name"]=this.buyerForm.value.middle_name;
    profile["last_name"]=this.buyerForm.value.last_name;
    profile["suffix"]=this.buyerForm.value.suffix;
    result["profile"]=profile;

    var location={};
    location["addressline1"]=this.buyerForm.value.addressline1;
    location["addressline2"]=this.buyerForm.value.addressline2;
    location["addressline3"]=this.buyerForm.value.addressline3;
    location["zip"]=this.buyerForm.value.zip;
    location["country"]=this.buyerForm.value.country;
    location["state_province"]=this.buyerForm.value.state_province;
    result["location"]=location;

    var contact={};
    contact["email_for_contact"]=this.buyerForm.value.email_for_contact;
    contact["mobile_no"]=this.buyerForm.value.mobile_no;
    result["contact"]=contact;

    Object.assign(profile,location,contact);
    console.log(result);

     this._DashboardService.update(result)
    .subscribe(
      (onSuccess) => console.log("succedd in updating your details",result),
      (onErr) => errorHandler(onErr)
    );
     return;
  }

  private aprofileimage(){
    let btnCust = '<button type="button" class="btn btn-secondary red" title="Add picture tags" ' +
        'onclick="alert(\'Call your custom code here.\')">' +
        '<i class="glyphicon glyphicon-tag"></i>' +
        '</button>';
    (<any>$("#profile_pic_url")).fileinput({
      overwriteInitial: true,
      maxFileSize: 12000,
      showClose: false,
      showCaption: false,
      showBrowse: false,
      browseOnZoneClick: true,
      removeLabel: '',
      removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
      removeTitle: 'Cancel or reset changes',
      elErrorContainer: '#kv-avatar-errors-2',
      msgErrorClass: 'alert alert-block alert-danger',
      defaultPreviewContent: '<img [src]="picture_url" width="160px"alt="Your Avatar" style="padding-top: 120px; width: 100%"><h6 class="text-muted">Click here to change your image</h6>',
      layoutTemplates: {main2: '{preview} ' + ' {remove} {browse}'},
      allowedFileExtensions: ["jpg", "png", "gif"]
    });
  }
  ngOnInit() {
    $('#ex2').slider({});
    $('.footer-category').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });
    this.aprofileimage()
  }

}

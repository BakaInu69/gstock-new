import { CartService } from '../cart/cart.service';
import {
  // InfoWindowManager,
  // GoogleMapsAPIWrapper,
  //  MarkerManager,
  MapsAPILoader
} from '@agm/core';
import { Component } from '@angular/core';
declare var google;
@Component({
  selector: 'app-Checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  // providers: [InfoWindowManager, GoogleMapsAPIWrapper, MarkerManager]
})
export class CheckoutComponent {
  private total
  lat = 51.678418;
  lng = 7.809007;
  constructor(
    private _cartService: CartService,
    private _loader: MapsAPILoader
  ) {
    const currentUser = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).user : null
    this._cartService.getCart(currentUser._id).subscribe(items => {
      this.total = this._cartService.totalQtyAndPrice(this._cartService.joinVariants(items)).total
    })
  }
  ngAfterViewInit() {

    this._loader.load().then(() => this.initMap())
  }
  private initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 1.3521,
        lng: 103.8198
      },
      zoom: 13,

    });
    const card = document.getElementById('pac-card');
    const input = <HTMLInputElement>document.getElementById('pac-input');
    console.log(input)
    const types = document.getElementById('type-selector');
    const strictBounds = document.getElementById('strict-bounds-selector');

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

    const autocomplete = new google.maps.places.Autocomplete(input);
    console.log('new', autocomplete)
    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    // const newOption: google.maps.MarkerOptions = {
    //   map: map,
    // }
    // const marker = new google.maps.Marker(newOption);

    autocomplete.addListener('place_changed', function () {
      infowindow.close();
      // marker.setVisible(false);
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert('No details available for input: \'' + place.name + '\'');
        return;
      }
      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17); // Why 17? Because it looks good.
      }
      // marker.setPosition(place.geometry.location);
      // marker.setVisible(true);

      let address = '';
      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
      }

      infowindowContent.children['place-icon'].src = place.icon;
      infowindowContent.children['place-name'].textContent = place.name;
      infowindowContent.children['place-address'].textContent = address;
      infowindow.open(map);
    });

    // Sets a listener on a radio button to change the filter type on Places
    // function setupClickListener(id, types) {
    //   const radioButton = document.getElementById(id);
    //   radioButton.addEventListener('click', function () {
    //     autocomplete.setTypes(types);
    //   });
    // }

    // setupClickListener('changetype-all', []);
    // setupClickListener('changetype-address', ['address']);
    // setupClickListener('changetype-establishment', ['establishment']);
    // setupClickListener('changetype-geocode', ['geocode']);

    // document.getElementById('use-strict-bounds')
    // .addEventListener('click', function () {
    // console.log('Checkbox clicked! New state=' + this.checked);
    // autocomplete.setBounds((<any>this).checked);
    // });
  }

}





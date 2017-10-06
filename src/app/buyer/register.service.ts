import { Injectable }     from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { RegisterComponent }           from './register.component';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class RegisterService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private Url = 'http://192.168.1.13:3000/user/register';

  // Add a new input
  public Register (body){
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.Url, body, options); // ...using post request

  }
}

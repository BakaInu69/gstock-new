import {HttpModule, Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
@Injectable()
export class RegisterService {
  http: Http;
  returnRegisterStatus:Object = [];
  posts_Url: string = 'http://192.168.1.13:3000/user/register';
  constructor(public _http: Http) {
    this.http = _http;
  }

}
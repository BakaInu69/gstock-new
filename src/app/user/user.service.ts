import { Subject } from 'rxjs/Subject'
import { HttpClient, } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
  private counter = 0;
  private url = environment.apiUrl
  public subject = new Subject();
  constructor(public _http: HttpClient) {
    this.emitUser()
  }
  public registerUser(body) {
    return this._http.post(this.url + '/user/register', body)
  }
  public loginUser(body) {
    return this._http.post(this.url + '/user/login', body)
  }
  public emitUser() {
    this.subject.next(JSON.parse(localStorage.getItem('user')))
  }
  public logout() {
    localStorage.clear()
    this.subject.next(null)
  }
}

import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NavbarService {
    private url = environment.apiUrl
    constructor(private http: HttpClient) {
    }
    public searchProduct(query) {
        return this.http.get(this.url + '/buyer/product/list?page=1&limit=20' + query);
      }

}

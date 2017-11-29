import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class ProductListingService {
    private url = environment.apiUrl;
    private headers = new HttpHeaders({'Authorization': "Basic Z3N0b2NrZGV2OnF3ZXIxMjM0"})
    public query = "";
    constructor(private http: HttpClient) {
      console.log("you should only see this one")

    }
    public getProduct(query) {
      console.log(query)
        return this.http.get(this.url + '/product/list?page=1&limit=20&name=' + query +'&select=brief',{headers:this.headers})
    }
}

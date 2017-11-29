import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductListingService {
    private url = environment.apiUrl
    constructor(private httpClient: HttpClient) { }
    public getProduct() {
        return this.httpClient.get(this.url + '/product/0')
    }
}

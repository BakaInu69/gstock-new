import { Observable } from 'rxjs/Rx'
import { Response } from '@angular/http'
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductDetailService {
    private url = environment.apiUrl
    constructor(private httpClient: HttpClient) { }
    public productDetail(productid) {
        return this.httpClient.get(this.url + '/product/id/' + productid)
    }
    public addToCart(body) {
        return this.httpClient.post(this.url + '/buyer/cart', body)
    }
    public loadSingleImage(productid, sku, order) {
        const headers = new HttpHeaders({ 'Content-Type': 'image/png', })
        return this.httpClient.get(this.url + '/merchant/thumbnailimage/' + productid + '/' + sku + '/' + order,
            { headers: headers, responseType: 'blob' })
    }
    public loadAllImages(productid, sku) {
        const allImage: Array<Observable<Blob>> = []
        for (let order = 0; order < 4; order++) {
            allImage.push(this.loadSingleImage(productid, sku, order))
        }

        return Observable.forkJoin(...allImage)
    }
    public totalImage(productid, sku) {
        return this.httpClient.get('/merchant/imagetotal/:productid/:sku')
    }
}

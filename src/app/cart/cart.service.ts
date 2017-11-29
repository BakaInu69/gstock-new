import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
    private url = environment.apiUrl
    public cart = [];
    constructor(private httpClient: HttpClient) { }
    public getCart(userid) {
        return this.httpClient.get(this.url + '/buyer/cart/' + userid)
    }
    public totalQtyAndPrice(data) {
        let count = 0
        let total = 0
        data.forEach(merchant => {
            merchant.variants.forEach(product => {
                count += 1
                total += Number.parseInt(product.detail.uP) * product.qty
            })
        })
        return {
            count: count,
            total: total,
        }
    }
    public joinVariants(data) {
        return data.map(element => {
            return {
                email: element.merchantID.email,
                variants: element['variants'].map(variant => {
                    return {
                        detail: element['productID'].variants.filter(variantTable => {
                            return variantTable.SKU === variant.SKU
                        })[0],
                        productName: element.productID.details.productName,
                        qty: variant.totalQty
                    }
                })
            }
        })
    }

}

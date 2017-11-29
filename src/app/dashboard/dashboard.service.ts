import { Subject } from 'rxjs/Subject'
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DashboardService {
    private url = environment.apiUrl;
    public headers = new HttpHeaders({ 'authorization': 'Bearer '+ environment.token})
    public subject = new Subject();
    constructor(private httpClient: HttpClient) {
        this.emitBuyer()
    }
    public getBuyerData() {
        return this.httpClient.get(this.url + '/user/account/detail?select=profile%2Fcontact%2Flocation', {headers:this.headers})
    }
    public update(body) {
        return this.httpClient.put(this.url + '/user/account/detail', body, {headers:this.headers})
    }
    public emitBuyer() {
        this.subject.next(JSON.parse(localStorage.getItem('buyer')))
    }
    public imageUpload(body){
        return this.httpClient.put(this.url + '/user/account/detail', body,{headers:this.headers})
    }
}

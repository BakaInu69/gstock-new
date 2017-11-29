import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NavbarService {
    private url = environment.apiUrl
    constructor(private httpClient: HttpClient) { }

}

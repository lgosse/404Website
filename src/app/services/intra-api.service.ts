import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IntraApiService {

    constructor(private http: Http) { }

    getUserInfo(access_token: string): Observable<any> {
        return this.http.get('https://api.intra.42.fr/v2/me?access_token=' + access_token)
            .map(response => response.json());
    }

}

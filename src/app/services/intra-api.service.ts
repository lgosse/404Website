import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IntraApiService {

    constructor(private http: Http) { }

    getUserInfo(access_token: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });


        return this.http.get('https://us-central1-website-d0a07.cloudfunctions.net/userinfo?access_token=' + access_token, options)
            .map(response => response.json());
    }

}

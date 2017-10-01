import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { UserModel } from '../models/user.model'

@Injectable()
export class UserService {
    apiUrl: string = 'api/user';

    constructor(private http: Http) { }

    Post(data: object) : Promise<UserModel> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
                    .post(this.apiUrl, data)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleErrorPromise);
                    //.subscribe(res => console.log(res));
    }

    private extractData(res: Response | any) {
	    let body = res.json();
        return body || {};
    }
    
    private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }	
}
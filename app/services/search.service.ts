import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
    apiRoot: string = 'https://itunes.apple.com/search';
    results: object[];
    loading: boolean;

    constructor(private http: Http) { }

    search(term: string) {
        let promise = new Promise(
            (resolve, reject) => {
                let apiUrl = '${this.apiRoot}?term=${term}&media=music&limit=20';
                this.http.get(apiUrl)
                    .toPromise()
                    .then(
                        res => {
                            console.log(res.json());
                            resolve();
                        }
                    )
            }
        );

        return promise;
    }
}
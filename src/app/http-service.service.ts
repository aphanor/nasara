import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpServiceService {

    constructor(private _http: Http) {

    }

    postData(w,x,y,z) {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        var body = JSON.stringify({'firstname': w, 'lastname': x, 'email': y, 'course': z});

        return this._http.post('/write', body, {
            headers: headers
        }).map(resp => resp.json())
    }

}

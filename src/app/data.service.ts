import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getSuperbowls() {
    return this._http.get("/api/superbowls")
      .map(result => this.result = result.json().data);
  }

  getOneSuperbowl() {
    return this._http.get("/api/superbowls/:SB")
      .map(result => this.result = result.json().data);
  }

}

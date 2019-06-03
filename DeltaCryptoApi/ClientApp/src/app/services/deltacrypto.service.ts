import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeltacryptoService {

  result: any;

  constructor(private _http: HttpClient) { }

  GetDeltaCryptos() : Observable<any>{
    return this._http.get(`http://localhost:2181/api/crypto`)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IDeltaCrypto } from '../models/IDeltaCrypto';

@Injectable()
export class DeltacryptoService {

  url = `http://localhost:2181/api/crypto`;

  constructor(private _http: HttpClient) { }

  GetDeltaCryptos(): Observable<any> {
    return this._http.get<IDeltaCrypto>(this.url);
  }

  getDeltaCryptoById(deltaCryptoId: string): Observable<IDeltaCrypto> {
    return this._http.get<IDeltaCrypto>(this.url + `/${deltaCryptoId}`);
  }

  createDeltaCrypto(deltaCrypto: IDeltaCrypto): Observable<IDeltaCrypto> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<IDeltaCrypto>(this.url + `/InsertCrypto/`,
      deltaCrypto, httpOptions);
  }

  updateDeltaCrypto(deltaCrypto: IDeltaCrypto): Observable<IDeltaCrypto> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<IDeltaCrypto>(this.url + '/UpdateCrypto/',
      deltaCrypto, httpOptions);
  }

  deleteDeltaCryptoById(deltaCryptoId: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<number>(this.url + '/DeleteCrypto?id=' + deltaCryptoId,
      httpOptions);
  }

}

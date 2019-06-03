import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IDeltaSellOrder } from '../models/IDeltaSellOrder';

@Injectable()
export class DeltamsoService {

  url = `http://localhost:2181/api/sellorder`;

  constructor(private _http: HttpClient) { }

  GetDeltaSellorders(): Observable<any> {
    return this._http.get<IDeltaSellOrder>(this.url);
  }

  getDeltaSellOrderId(dcSellOrderId: string): Observable<IDeltaSellOrder> {
    return this._http.get<IDeltaSellOrder>(this.url + `/${dcSellOrderId}`);
  }

  createDeltaSellOrder(dcSellOrder: IDeltaSellOrder): Observable<IDeltaSellOrder> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<IDeltaSellOrder>(this.url + `/CreateSellOrder`,
    dcSellOrder, httpOptions);
  }

  updateDeltaSellOrder(dcsellorder: IDeltaSellOrder): Observable<IDeltaSellOrder> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<IDeltaSellOrder>(this.url + '/UpdateSellOrder/',
    dcsellorder, httpOptions);
  }

  deleteDeltaSellOrderById(dcSellOrderId: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<number>(this.url + '/DeleteSellOrder?id=' + dcSellOrderId,
      httpOptions);
  }

}

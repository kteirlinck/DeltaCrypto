import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IDeltaBuyOrder } from '../models/IDeltaBuyOrder';

@Injectable()
export class DeltamboService {

  url = `http://localhost:2181/api/buyorder`;

  constructor(private _http: HttpClient) { }

  GetDeltaBuyOrders(): Observable<any> {
    return this._http.get<IDeltaBuyOrder>(this.url);
  }

  getDeltaBuyOrderId(dcBuyOrderId: string): Observable<IDeltaBuyOrder> {
    return this._http.get<IDeltaBuyOrder>(this.url + `/${dcBuyOrderId}`);
  }

  createDeltaBuyOrder(dcBuyOrder: IDeltaBuyOrder): Observable<IDeltaBuyOrder> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<IDeltaBuyOrder>(this.url + `/CreateBuyOrder`,
    dcBuyOrder, httpOptions);
  }

  updateDeltaBuyOrder(dcBuyOrder: IDeltaBuyOrder): Observable<IDeltaBuyOrder> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<IDeltaBuyOrder>(this.url + '/UpdateBuyOrder/',
    dcBuyOrder, httpOptions);
  }

  deleteDeltaBuyOrderById(dcBuyOrderId: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<number>(this.url + '/DeleteBuyOrder?id=' + dcBuyOrderId,
      httpOptions);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IDeltaWallet } from '../models/IDeltaWallet';
import { IDeltaCrypto } from '../models/IDeltaCrypto';
import { IDeltaSellOrder } from '../models/IDeltaSellOrder';


@Injectable()
export class DeltawalletService {

  url = `http://localhost:2181/api/Wallet`;

  constructor(private _http: HttpClient) { }

  GetDeltaWallets(): Observable<any> {
    return this._http.get<IDeltaWallet>(this.url);
  }

  GetDeltaWalletId(dcWalletId: string): Observable<IDeltaWallet> {
    return this._http.get<IDeltaWallet>(this.url + `/${dcWalletId}`);
  }

  CreateDeltaWallet(dcWallet: IDeltaWallet): Observable<IDeltaWallet> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.post<IDeltaWallet>(this.url + `/CreateWallet`,
    dcWallet, httpOptions);
  }

  UpdateDeltaWallet(dcWallet: IDeltaWallet): Observable<IDeltaWallet> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.put<IDeltaWallet>(this.url + '/UpdateWallet/',
    dcWallet, httpOptions);
  }

  DeleteDeltaWalletById(dcWalletId: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.delete<number>(this.url + '/DeleteWallet?id=' + dcWalletId,
      httpOptions);
  }

}

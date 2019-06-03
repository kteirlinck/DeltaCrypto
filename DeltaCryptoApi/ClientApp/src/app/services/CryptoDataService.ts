import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CryptoDataService {

  result:any;
  //currentCryptoUrl: string = "";

  constructor(private _http: HttpClient) { }
  
  getPrices(fsyms : number, tsyms : number): Observable<any> {
    return this._http.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms}&tsyms=${tsyms}`)
  }

  getTopData(){
    return this._http.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=EUR')
  }
}


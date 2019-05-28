import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CryptoDataService {

  result:any;

  constructor(private _http: HttpClient) { }
  
  getPrices() {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=EUR')
      .map(result => this.result = result);
  }

  getTopData(){
    return this._http.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=EUR')
      .map(result => this.result = result);
  }

}
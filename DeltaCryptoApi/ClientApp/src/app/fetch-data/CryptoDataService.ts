import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CryptoDataService {

  result:any;
  currentCryptoUrl: string = "";

  constructor(private _http: HttpClient) { }
  

  // getPrices(fsyms : number, tsyms : number) {
  //   return this._http.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms}&tsyms=${tsyms}`)
  //     .map(result => this.result = result)
  //     .toPromise();
  // }

  getPrices(fsyms : number, tsyms : number): Observable<any> {
    return this._http.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms}&tsyms=${tsyms}`)
      //.map(result => this.result = result)
  }

  getTopData(){
    return this._http.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=EUR')
      //.map(result => this.result = result);
  }
}

// export interface Currency {
//   TYPE: string;
//   MARKET: string;
//   FROMSYMBOL: string;
//   TOSYMBOL: string;
//   FLAGS: string;
//   PRICE: number;
//   LASTUPDATE: number;
//   LASTVOLUME: number;
//   LASTVOLUMETO: number;
//   LASTTRADEID: string;
//   VOLUMEDAY: number;
//   VOLUMEDAYTO: number;
//   VOLUME24HOUR: number;
//   VOLUME24HOURTO: number;
//   OPENDAY: number;
//   HIGHDAY: number;
//   LOWDAY: number;
//   OPEN24HOUR?: any;
//   HIGH24HOUR: number;
//   LOW24HOUR?: any;
//   LASTMARKET: string;
//   VOLUMEHOUR: number;
//   VOLUMEHOURTO: number;
//   OPENHOUR: number;
//   HIGHHOUR: number;
//   LOWHOUR: number;
//   CHANGE24HOUR?: any;
//   CHANGEPCT24HOUR?: any;
//   CHANGEDAY: number;
//   CHANGEPCTDAY: number;
//   SUPPLY: number;
//   MKTCAP: number;
//   TOTALVOLUME24H: number;
//   TOTALVOLUME24HTO: number;
//   IMAGEURL: string;
// }

// export interface IfsymsResult {
//   BTC?: Currency;
//   ETH?: Currency;
//   EOS?: Currency;
//   LTC?: Currency;
//   XRP?: Currency;
//   BSV?: Currency;
//   BCH?: Currency;
//   ZEC?: Currency;
//   TRX?: Currency;
//   NEO?: Currency;
// }

// export interface ItsymsResult {
//   USD: Currency;
//   EUR: Currency;
// }

// export interface IPriceFull {
//   DISPLAY: ItsymsResult;
// }


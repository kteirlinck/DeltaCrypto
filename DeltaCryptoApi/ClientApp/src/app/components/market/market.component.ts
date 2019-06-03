import { Component } from '@angular/core';
import { CryptoDataService } from '../../services/CryptoDataService';

@Component({
  selector: 'app-root',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})

export class MarketComponent {
  objectKeys = Object.keys;
  cryptos: any;

  constructor(private _data: CryptoDataService) {

  }

  ngOnInit() {
    this._data.getTopData()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });
  }

}
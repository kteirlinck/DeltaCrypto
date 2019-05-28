import { Component } from '@angular/core';
import { CryptoDataService } from './CryptoDataService';

@Component({
  selector: 'app-root',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
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
import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../fetch-data/CryptoDataService';
import { Currency } from '../models/Currency';

@Component({
  selector: 'app-sniper',
  templateUrl: './sniper.component.html',
  styleUrls: ['./sniper.component.css']
})
export class SniperComponent implements OnInit {

  fsymsPick: number;
  tsymsPick: number;
  dataLoaded = false;

  fsymsCollection: Ifsyms[] = [
    { Fsyms: "BTC", ID: 1 },
    { Fsyms: "ETH", ID: 2 },
    { Fsyms: "EOS", ID: 3 },
    { Fsyms: "LTC", ID: 4 },
    { Fsyms: "XRP", ID: 5 },
    { Fsyms: "BSV", ID: 6 },
    { Fsyms: "BCH", ID: 7 },
    { Fsyms: "ZEC", ID: 8 },
    { Fsyms: "TRX", ID: 9 },
    { Fsyms: "NEO", ID: 10 }
  ]

  tsymsCollection: Itsyms[] = [
    { Tsyms: "USD", ID: 1 },
    { Tsyms: "EUR", ID: 2 }
  ]

  objectKeys = Object.keys;
  tsymsResult: Currency[];


  constructor(private cryptoSvc: CryptoDataService) {
  }

  ngOnInit() {
  }

  private Aim() {
    this.cryptoSvc.getPrices(this.fsymsPick, this.tsymsPick).subscribe(data => {
      this.dataLoaded = true;
      Object.keys(data.DISPLAY).forEach(key => {
        this.tsymsResult = data.DISPLAY[key];
      });
      console.log(this.tsymsResult);
    });
  }

  fSelected() {
    console.log(this.fsymsPick);
  }
  tSelected() {
    console.log(this.tsymsPick);
  }
}

interface Ifsyms {
  Fsyms: string;
  ID: number;
}

interface Itsyms {
  Tsyms: string;
  ID: number;
}


import { Component, OnInit } from '@angular/core';
import { DeltacryptoService } from '../../services/deltacrypto.service';
import { IDeltaSellOrder } from '../../models/IDeltaSellOrder';
import { IDeltaCrypto } from '../../models/IDeltaCrypto';
import { DeltawalletService } from '../../services/deltawallet.service'

@Component({
  selector: 'app-specsellorder',
  templateUrl: './specsellorder.component.html',
  styleUrls: ['./specsellorder.component.css']
})
export class SpecsellorderComponent implements OnInit {

  dateTimeListed: Date; 
  dCryptoPick: number;
  dCBQuantity: number;
  dCSellTargetLower: number;
  dCSellTargetUpper: number;
  dCryptos: IDeltaCrypto[];
  dCSellOrder: IDeltaSellOrder;

  dataLoaded = false;

  constructor(private _data: DeltacryptoService) {
    
  }

  ngOnInit() {
    this._data.GetDeltaCryptos()
    .subscribe(res => {
      this.dCryptos = res;
      console.log(res);
    });
  }

}

import { Component, OnInit } from '@angular/core';
//import { DeltacryptoService } from '../../services/deltacrypto.service';
import { IDeltaSellOrder } from '../../models/IDeltaSellOrder';
import { IDeltaCrypto } from '../../models/IDeltaCrypto';
import { DeltawalletService } from '../../services/deltawallet.service'
import { IDeltaWallet } from '../../models/IDeltaWallet';

@Component({
  selector: 'app-specsellorder',
  templateUrl: './specsellorder.component.html',
  styleUrls: ['./specsellorder.component.css']
})
export class SpecsellorderComponent implements OnInit {

  dateTimeListed: Date; 
  dAssetPick: number;
  dCSQuantity: number;
  dCSellTargetLower: number;
  dCSellTargetUpper: number;
  dCAssets: IDeltaCrypto[];
  dCSellOrder: IDeltaSellOrder;
  dCWalletId: string;
  dCWallet: IDeltaWallet;

  dataLoaded = false;

  constructor(private _data: DeltawalletService) {
    
  }

  ngOnInit() {
    this._data.GetDeltaWalletId(this.dCWalletId = "1")
    .subscribe(res => {
      this.dCWallet = res;
      console.log(res);
    });
  }

  submitSellOrder(){
    this.snapShotTime();
    this.dCSellOrder = {
      crypto: this.dAssetPick,
      quantity: this.dCSQuantity,
      sellTargetLower: this.dCSellTargetLower,
      sellTargetUpper: this.dCSellTargetLower,
      datePlaced: this.dateTimeListed
    }
  }

  get DAssetPick(){
    return this.dAssetPick;
  }

  set DAssetPick(value: number){
    this.dAssetPick = value;
  }
  
  get DCSQuantity(){
    return this.dCSQuantity;
  }

  set DCSQuantity(value: number){
    this.dCSQuantity = value;
  }

  get DCSellTargetLower(){
    return this.dCSellTargetLower;
  }

  set DCSellTargetLower(value: number){
    this.dCSellTargetLower = value;
  }

  snapShotTime(){
    var date = new Date();
    this.dateTimeListed = date;
  }

  showBOInput(){
    this.snapShotTime();
    console.log(this.dCSQuantity);
    console.log(this.dCSellTargetLower);
    console.log(this.dCSellTargetUpper);
    console.log(this.dCSellOrder);
  }

}

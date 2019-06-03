import { Component, OnInit } from '@angular/core';
import { DeltacryptoService } from '../../services/deltacrypto.service';
import { IDeltaBuyOrder } from '../../models/IDeltaBuyOrder';
import { IDeltaCrypto } from '../../models/IDeltaCrypto';

@Component({
  selector: 'app-specbuyorder',
  templateUrl: './specbuyorder.component.html',
  styleUrls: ['./specbuyorder.component.css']
})
export class SpecbuyorderComponent implements OnInit {

  dateTimeListed: Date; 
  dCryptoPick: number;
  dCBQuantity: number;
  dCBuyTarget: number;
  dCryptos: IDeltaCrypto[];
  dCBuyOrder: IDeltaBuyOrder;

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

  submitBuyOrder(){
    this.snapShotTime();
    this.dCBuyOrder = {
      crypto: this.dCryptoPick,
      quantity: this.dCBQuantity,
      buyTarget: this.dCBuyTarget,
      datePlaced: this.dateTimeListed
    }
  }

  get DCryptoPick(){
    return this.dCryptoPick;
  }

  set DCryptoPick(value: number){
    this.dCryptoPick = value;
  }
  
  get DCBQuantity(){
    return this.dCBQuantity;
  }

  set DCBQuantity(value: number){
    this.dCBQuantity = value;
  }

  get DCBuyTarget(){
    return this.dCBuyTarget;
  }

  set DCBuyTarget(value: number){
    this.dCBuyTarget = value;
  }


  snapShotTime(){
    var date = new Date();
    this.dateTimeListed = date;
  }

  showBOInput(){
    console.log(this.dCBQuantity);
    console.log(this.dCBuyTarget);
    console.log(this.dCBuyOrder);
  }

}

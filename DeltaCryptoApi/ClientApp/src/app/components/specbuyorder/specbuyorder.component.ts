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
    this.dCBuyOrder.crypto = this.dCryptoPick.valueOf();
    this.dCBuyOrder.quantity = this.dCBQuantity.valueOf();
    this.dCBuyOrder.buyTarget = this.dCBuyTarget.valueOf();
    this.dCBuyOrder.datePlaced = this.dateTimeListed.valueOf();
  }

  get DCryptoPick(){
    return this.dCryptoPick;
  }

  set DCryptoPick(value: number){
    this.dCryptoPick = value;
    this.submitBuyOrder();
  }
  
  get DCBQuantity(){
    return this.dCBQuantity;
  }

  set DCBQuantity(value: number){
    this.dCBQuantity = value;
    this.submitBuyOrder();
  }

  get DCBuyTarget(){
    return this.dCBuyTarget;
  }

  set DCBuyTarget(value: number){
    this.dCBuyTarget = value;
    this.submitBuyOrder();
  }


  snapShotTime(){
    var date = new Date();
    this.dateTimeListed = date;
    // console.log(date);
    // console.log(this.dateTimeListed);
  }

  showBOInput(){
    this.snapShotTime();
    console.log(this.dCBQuantity);
    console.log(this.dCBuyTarget);
    console.log(this.dCBuyOrder);
  }

}

// interface IDeltaBuyOrderDTO {
//     dcbt: number;
//     dcbq: number;
//     dcbtype: number;
// }

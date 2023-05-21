import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  cartCounter:BehaviorSubject<number>=new BehaviorSubject(0)
  cartCunterObs=this.cartCounter.asObservable();     //notify any changes to the cart count

emitItem(count:number){
  this.cartCounter.next(count)
}
}

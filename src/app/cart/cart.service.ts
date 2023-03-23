import { Injectable } from '@angular/core';
import { SharedService } from '../core/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private shared:SharedService) { }
  private orderObj:any;
  addItemtoCart(item:any){
    let cartItems:any=this.getproductDatafromLocalStorage();
    cartItems.push(item);
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    this.shared.emitItem(cartItems.length)
     }
     getproductDatafromLocalStorage(){
      let items=localStorage.getItem("cartItems");
      if(items){
        items=JSON.parse(items);
        return items;
      }else{
        return [];
      }
    }
    setOrderDetails(order:any){
this.orderObj=order;
    }
    getOrderDetails(){
      return this.orderObj;
    }
    clearProductsFromLocalStorage(){
      localStorage.removeItem("cartItems")
    }
     }
  

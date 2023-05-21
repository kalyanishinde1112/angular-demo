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
  
    //  addItemtoCart(item: any): This method takes an argument called item and adds it to the cart stored in the browser's local storage. It first retrieves the existing cart items from local storage using the getproductDatafromLocalStorage() method. It then adds the item passed as an argument to the cartItems array, and stores the updated cartItems array back into local storage using the setItem() method, after converting it to a JSON string using JSON.stringify(). 
    // Finally, it emits an event using the emitItem() method from a shared object, passing the new length of the cartItems array as an argument.

    //  getproductDatafromLocalStorage(): This method retrieves the existing cart items from local storage. It first checks if the cartItems key exists in local storage. If it does, it retrieves the value associated with the key and converts it from a JSON string to a JavaScript object using JSON.parse(). It then returns the resulting items array. If the cartItems key does not exist in local storage, it returns an empty array.
     
    //  setOrderDetails(order: any): This method takes an argument called order and sets the orderObj property of the class to the order object.
     
    //  getOrderDetails(): This method returns the orderObj property of the class.
     
    //  clearProductsFromLocalStorage(): This method removes the cartItems key from local storage, effectively clearing the shopping cart stored in local storage.
     
    //  Overall, these methods provide basic functionality for managing a shopping cart and order details in a browser environment using local storage.
     
     
     
     
     
     
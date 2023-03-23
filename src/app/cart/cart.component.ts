import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { order,Product} from './cartData';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private cart:CartService,private router:Router){}

  finalOrder:order=new order;
  ngOnInit(): void {
     let cartItems=this.cart.getproductDatafromLocalStorage()
     this.setCartitems(cartItems);
     console.log(this.finalOrder);
     this.calculateTotalPrice();
     
  }
  setCartitems(cartItems:any){
let productArr:Product[]=[];
cartItems.forEach((el:any)=>{
  let productObj=new Product();
  productObj.productName=el.description;
  productObj.brand=el.brand;
  productObj.type=el.type;
  productObj.drugCode=el.drugCode;
  productObj.actualPrice=el.actualPrice;
  productObj.discountPrice=el.discountPrice;
  productObj.quantity=1;
  productObj.producttotalPrice = Number(productObj.discountPrice) * Number(productObj.quantity);
  productArr.push(productObj);
  console.log("maped obj",productObj);
  
});
this.finalOrder.products=productArr
  }
calculateTotalPrice(){
  this.finalOrder.totalAmmount=0;
  this.finalOrder.totalDiscount=100;
  this.finalOrder.products.forEach((el:Product)=>{
    this.finalOrder.totalAmmount+=Number(el.producttotalPrice);
  });
  this.finalOrder.finalAmmountTOpay=this.finalOrder.totalAmmount-this.finalOrder.totalDiscount;
  console.log("ammount to pay",this.finalOrder.finalAmmountTOpay);
  
}
changeQuantity(index:number,action:string){
  let productItem=this.finalOrder.products[index];
  if(action=='Increment'){
    productItem.quantity++;
  }
  else{
    productItem.quantity--;
    if(productItem.quantity<1){
      let res=confirm("are you sure")
      if(res){
        this.finalOrder.products.splice(index,1)
      }
      else{
        productItem.quantity++;
      }
    }
  }
  productItem.producttotalPrice=Number(productItem.discountPrice)*Number(productItem.quantity);
  this.calculateTotalPrice();
}
checkout(){
  this.cart.setOrderDetails(this.finalOrder);
  this.router.navigate(['/cart/booking-details'])
}
}

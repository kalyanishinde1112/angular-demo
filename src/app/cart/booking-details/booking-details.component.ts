import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit{
  finalOrderObj:any
  bookingForm!:FormGroup;
  constructor(private cart:CartService,private fb:FormBuilder,private http:HttpService,private router:Router){
    this.finalOrderObj=this.cart.getOrderDetails();
    console.log(this.finalOrderObj);
    
  }
  ngOnInit(){
     this.createFormStructure();
  }
createFormStructure(){
  this.bookingForm=this.fb.group({
    "customerName":["",Validators.required],
    "mobileNo":["",Validators.required],
    "gender":[""],
    "dateOfBirth":[""],
    "emailId":[""],
"address":this.fb.group({
  "line1":[""],
  "line2":[""],
  "landmark":[""],
  "city":[""],
  "state":[""],
  "pincode":[""]
})
  })
}
placeOrder(){
  this.finalOrderObj.orderId=Math.floor(1000000 + Math.random()*9000000);
  const request=this.bookingForm.value;
  const finalOrderRequest={...request,...this.finalOrderObj}
  console.log("mapped order data",finalOrderRequest);
  this.http.postDataToserver("orders",finalOrderRequest).subscribe((el:any)=>{
    console.log(el);
    if(el){
      this.cart.clearProductsFromLocalStorage();
        this.router.navigate(["/cart/confirm-order"]);
      
    }
  })
}
}

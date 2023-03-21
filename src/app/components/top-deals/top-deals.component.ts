import { Component,OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/services/http.service';
import { SharedService } from 'src/app/core/shared.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit {
  topDealsData:any[]=[];

  constructor(private http:HttpService,private shared:SharedService){}
  ngOnInit(){
    this.getTopdealsData();
  }
  slidesStore:any
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  getTopdealsData(){
    this.http.getDataFromServer("top-deals").subscribe((el:any)=>{
      this.topDealsData=el;
      console.log("topdeals",this.topDealsData);
      
    })
  }
  addTocart(item:any){
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
}

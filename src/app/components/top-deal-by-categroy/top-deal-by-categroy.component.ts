import { Component,OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-top-deal-by-categroy',
  templateUrl: './top-deal-by-categroy.component.html',
  styleUrls: ['./top-deal-by-categroy.component.scss']
})
export class TopDealByCategroyComponent implements OnInit{
  dataCategory:any=[];
  constructor(private http:HttpService){

  }
  ngOnInit(){
    this.getTopDealsByCategory();
  }
getTopDealsByCategory(){
  const endPoint="top-deals-by-category"
  this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
    this.dataCategory=el;
    console.log("data by Category",this.dataCategory);
    

  })
}
}

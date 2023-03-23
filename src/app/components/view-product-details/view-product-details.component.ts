import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {
  selectedDrugCode:string|null;
  productData:any;
  constructor(private http:HttpService, private route:ActivatedRoute){
    this.selectedDrugCode=this.route.snapshot.paramMap.get('drugCode')
  }
  ngOnInit(){
    this.getSingleProductDetailsbyId();
  }
getSingleProductDetailsbyId(){
  const endPoint="top-deals?drugCode="+this.selectedDrugCode
  this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
    if(el && el.length >0){
      this.productData=el[0];
      console.log("prod details",this.productData);

    }
    
  })
}
}

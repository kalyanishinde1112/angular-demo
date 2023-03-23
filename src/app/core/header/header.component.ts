import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  showSignup:boolean=false;
  activeComponent = 'signin';
  pageTitle="Sign in here";
  isUserLoggedIn:boolean=false;
  userDetails:any;
  // cartCounter!:Observable<number>
  cartCounter:number=0;
  @ViewChild('closeBn')closeBn!:ElementRef;
  constructor(private auth:AuthService, private shared:SharedService){}
  ngOnInit(){
   let userData= this.userDetails=this.auth.getUserdetailsFormLocalstorage();
    if(userData){
      this.isUserLoggedIn=true;
      this.userDetails=userData;
    }
    this.shared.cartCunterObs.subscribe((el:any)=>{
      this.cartCounter=el;
    })
  }
  showSignin(){
    this.activeComponent='signin';
    this.pageTitle='Sign In here..'
   
  }
  showSignupcomp(){
    this.activeComponent='signup';
    this.pageTitle="Signup here..."
  }
hideShowSignup(){
  this.showSignup=true;
}
getAction(flag:any){
if(flag){
this.closeBn.nativeElement.click();
this.userDetails=this.auth.getUserdetailsFormLocalstorage();
this.isUserLoggedIn=true;

}
}
}

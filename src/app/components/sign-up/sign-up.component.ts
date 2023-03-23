import { Component,OnDestroy,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit,OnDestroy{
  signupForm!:FormGroup
  isGetOtp:boolean=false;
  otpCounter:number=0;
  sub!:Subscription;
  otpGenrated!:number;
  isOtpVerified:boolean=false;
  isIncorrectOtp:boolean=false;
  constructor(private fb:FormBuilder,private http:HttpService){}
  ngOnInit(){
    this.getSignupData();
  }
  getSignupData(){
    this.signupForm=this.fb.group({
      "userName":["",[Validators.required]],
      "mobile":["",[Validators.required]],
     "password":["",[Validators.required]],
     "isMobileVerified":[false]
    })

  }

  submit(){
    // this.signupForm.value;
    console.log(this.signupForm.value);
    this.http.postDataToserver("users",this.signupForm.value).subscribe((el:any)=>{
      alert("registred successfully")
    })
    
  }
  getOtp(){
    this.isGetOtp=true;
    this.otpGenrated=Math.floor(1000+Math.random()*9000);
    console.log("otp",this.otpGenrated);
    
    this.sub=interval(1000).subscribe((el:number)=>
    {
      this.otpCounter=60-el;
      if(this.otpCounter===0){
        this.sub.unsubscribe();
      }
      console.log(el);
      
    }
    )
  }
// verify otp functionality
  verifyOtp(otp:any){
    if(this.otpGenrated==otp){
      this.sub.unsubscribe();
      this.isGetOtp=false;
      this.isOtpVerified=true;
      this.isIncorrectOtp=false;
// on verify otp function we have to set mobile number verfified value to true
this.signupForm.controls["isMobileVerified"].setValue(true);
    }
    else{
      this.isIncorrectOtp=true;
    }
  }
  ngOnDestroy(){
this.sub.unsubscribe();
  }
}

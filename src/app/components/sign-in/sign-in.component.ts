import { HttpParams } from '@angular/common/http';
import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  signinForm!:FormGroup;
  loginData:any
  isNewUser:boolean=false;
  isUserLoggedIn:boolean=false;
  @Output() emitAction:EventEmitter<boolean>=new EventEmitter(false)
  constructor(private fb:FormBuilder,private http:HttpService){

  }
 
  ngOnInit() {
    this.getFormData();
  }
getFormData(){
  this.signinForm=this.fb.group({
   "userName":["",Validators.required],
    "password":["",Validators.required]
  })

}
submit(){
  const httpParams=new HttpParams().set("username",this.signinForm.controls['userName'].value)
                                    .set("password",this.signinForm.controls['password'].value)
this.http.getDataFromServerByQueryParameter("users",httpParams).subscribe((el:any)=>{
  if(el && el.length >0){
    this.loginData=el;
    this.isNewUser=false;
    const token="Berut45jkjlk7h";
    localStorage.setItem("auth token",token)
    localStorage.setItem("userDetails",JSON.stringify(el[0]));
    this.emitAction.emit(true);
  }
  else{
    this.isNewUser=true;

  }
})

  this.signinForm.value;
  console.log(this.signinForm.value);
  
}
}

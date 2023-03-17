import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseUrl:string=environment.baseUrl;
httpHeaders:HttpHeaders=new HttpHeaders().set("Content-type","application/json")
  constructor(private http:HttpClient) { }
  // to get all date from server
  getDataFromServer(endpoint:string){
const url=this.baseUrl+endpoint;
return this.http.get(url,{headers:this.httpHeaders})
  }
  getPincode(){
    const url=this.baseUrl;
    return this.http.get(url,{headers:this.httpHeaders})
  }
}


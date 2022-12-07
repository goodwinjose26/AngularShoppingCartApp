import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  constructor(private api:ApiService) {}
  username=""
  password=""
  searchdata:any=[]
  loginValues=()=>
  {
    let data:any={
      "username":this.username,"password":this.password
    }
console.log(data)
this.api.viewproduct().subscribe(
  (response:any)=>
  {
    console.log(response)
    if(response.length==0)
    {
      alert("no data")
    }
    else
    {
      this.searchdata=response
    }
  }
)
  }

}





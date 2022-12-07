import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {


  username=""
  password=""
constructor(private route:Router){}
  loginValues=()=>
  {
    let data:any=
    {
      "username":this.username,"password":this.password
    }
    console.log(data)

    if (this.username=="admin" && this.password=="1234") {
this.route.navigate(["/add"])      
    } else {
      alert("invalid credentials")
      
    }
  }

}

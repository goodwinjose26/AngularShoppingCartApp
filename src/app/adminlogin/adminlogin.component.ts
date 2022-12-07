import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {


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

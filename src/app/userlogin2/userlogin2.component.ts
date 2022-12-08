import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin2',
  templateUrl: './userlogin2.component.html',
  styleUrls: ['./userlogin2.component.css']
})
export class Userlogin2Component {

  username=""
  password=""
  searchUser:any=[]
  
  constructor(private api:ApiService,private router:Router){}
  loginValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    this.api.addLogin(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("invalid email or password")
          this.username=""
          this.password=""
        } else {
          this.searchUser=response;
          this.router.navigate(['/view'])
        }
       
       
      }
    )
    
  }
  }
  
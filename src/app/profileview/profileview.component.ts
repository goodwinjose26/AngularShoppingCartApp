import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent {
  userid:any=""
  constructor(private api:ApiService){
     this.userid=localStorage.getItem("userInfo")
 let data:any=
 {"id":this.userid}
     this.api.getprofile(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
     )
    }
    data:any=[]

}

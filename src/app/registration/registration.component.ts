import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name=""
  address=""
  email=""
  phno=""
  username=""
  password=""


  constructor(private api:ApiService) {}

  regValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"email":this.email,"phno":this.phno,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addproduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("added")
          this.name="",this.address="",this.email="",this.phno="",this.username="",this.password=""
        }
        else
        {
          alert("error")
        }
      }
    )
  }

}

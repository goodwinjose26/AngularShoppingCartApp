import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name=""
  price=""
  description=""
  image=""
  category=""


  constructor(private api:ApiService) {}

  addemployee=()=>
  {
    let data:any={"name":this.name,"price":this.price,"description":this.description,"image":this.image,"category":this.category}
    console.log(data)
    this.api.addemployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("added")
          this.name="",this.price="",this.description="",this.description="",this.image="",this.category=""
        }
        else
        {
          alert("error")
        }
      }
    )
  }

}

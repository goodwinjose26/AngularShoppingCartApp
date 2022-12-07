import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  constructor(private api:ApiService) {}
  name=""
  searchdata:any=[]
  searchproduct=()=>
  {
    let data={
      "name":this.name
    }
console.log(data)
this.api.searchproduct(data).subscribe(
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

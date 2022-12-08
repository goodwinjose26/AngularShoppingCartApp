import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent {


  constructor(private api:ApiService)
  {
    api.viewproduct().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
data:any=[]
}

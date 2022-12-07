import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Navbar1Component } from './navbar1/navbar1.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { UserloginComponent } from './userlogin/userlogin.component'
const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"add",
    component:AddComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"userlogin",
    component:UserloginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AdminloginComponent,
    Navbar1Component,
    ViewComponent,
    SearchComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

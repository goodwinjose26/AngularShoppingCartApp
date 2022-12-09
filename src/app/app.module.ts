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
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { Userlogin2Component } from './userlogin2/userlogin2.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { UserviewComponent } from './userview/userview.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { ProfileviewComponent } from './profileview/profileview.component'
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
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"login2",
    component:Userlogin2Component
  },
  {
    path:"userview",
    component:UserviewComponent
  },
  {
   path:"usersearch",
   component:UsersearchComponent
  },
  {
    path:"profileview",
    component:ProfileviewComponent
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
    UserloginComponent,
    RegistrationComponent,
    Userlogin2Component,
    Navbar2Component,
    UserviewComponent,
    UsersearchComponent,
    ProfileviewComponent
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

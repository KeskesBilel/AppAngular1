import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
const routes:Routes=[
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'',redirectTo:'/about',pathMatch:'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent
  ],
  //inmportion  de module 
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  // declaratn de service en providers 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

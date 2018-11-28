import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    //CommonModule, 
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

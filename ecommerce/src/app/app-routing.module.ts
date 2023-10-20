import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren:() => import("./modules/home/home.module").then(m => m.HomeModule)
  },

  { 
    path: 'auth',
    loadChildren:() => import("./modules/auth-profile/auth-profile.module").then(m => m.AuthProfileModule)
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

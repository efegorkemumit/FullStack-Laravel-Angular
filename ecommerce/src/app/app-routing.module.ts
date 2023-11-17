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
  },

  { 
    path: '',
    loadChildren:() => import("./modules/ecommerce-auth/ecommerce-auth.module").then(m => m.EcommerceAuthModule)
  },

  {
    path:'',
    redirectTo:'/',
    pathMatch:'full'

  },

  {
    path:'**',
    redirectTo:'error/404',

  },




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

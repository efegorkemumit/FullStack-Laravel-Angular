import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceAuthComponent } from './ecommerce-auth.component';
import { ProfileComponent } from './profile/profile.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { 
    path: '',
    component: EcommerceAuthComponent,
    children:[
      {
        path:'profile-client',
        component:ProfileComponent
      },
      {
        path:'cart-basket',
        component:BasketComponent
      },
     
    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceAuthRoutingModule { }

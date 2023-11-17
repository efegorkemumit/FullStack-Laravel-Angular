import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceAuthRoutingModule } from './ecommerce-auth-routing.module';
import { EcommerceAuthComponent } from './ecommerce-auth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    EcommerceAuthComponent,
    BasketComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    EcommerceAuthRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class EcommerceAuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/_services/auth.guard';


const routes: Routes = [
  {
    path: 'product', loadChildren:() =>
    import('./modules/product/product.module').then((m)=> m.ProductModule) 
  },
  {
    path: 'ecommerce', loadChildren:() =>
    import('./modules/eccommerce/eccommerce.module').then((m)=> m.EccommerceModule) 
  },
  {
    path: 'slider', 
    canActivate: [AuthGuard],
    loadChildren:() =>
    import('./modules/slider/slider.module').then((m)=> m.SliderModule) 
  },

  {
    path: 'users', 
    canActivate: [AuthGuard],
    loadChildren:() =>
    import('./modules/users/users.module').then((m)=> m.UsersModule) 
  },
  {
    path: 'auth', loadChildren:() =>
    import('./modules/auth/auth.module').then((m)=> m.AuthModule) 
  },
  {
    path: 'pages', loadChildren:() =>
    import('./modules/pages/pages.module').then((m)=> m.PagesModule) 
  },
  {
    path: 'cupon', 
    canActivate: [AuthGuard],
    loadChildren:() =>
    import('./modules/cupones/cupones.module').then((m)=> m.CuponesModule) 
  },

  {
    path: 'discount', 
    canActivate: [AuthGuard],
    loadChildren:() =>
    import('./modules/discount/discount.module').then((m)=> m.DiscountModule) 
  },


  {
    path: '', 
    canActivate: [AuthGuard],
    loadChildren:() =>
    import('./modules/dashboard/dashboard.module').then((m)=> m.DashboardModule) 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

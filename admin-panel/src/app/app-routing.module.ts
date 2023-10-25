import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'ecommerce', loadChildren:() =>
    import('./modules/eccommerce/eccommerce.module').then((m)=> m.EccommerceModule) 
  },
  {
    path: 'users', loadChildren:() =>
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
    path: '', loadChildren:() =>
    import('./modules/dashboard/dashboard.module').then((m)=> m.DashboardModule) 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

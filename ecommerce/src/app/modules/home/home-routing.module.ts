import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'product/:id',
        component:ProductDetailComponent
      },
     
    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { MaintetanceComponent } from './maintetance/maintetance.component';

const routes: Routes = [
  {
    path: '', 
    component:PagesComponent,
    children:[
      {
        path:'error-404', component:Page404Component
      },
      {
        path:'error-500', component:Page500Component
      },
      {
        path:'mainteantance', component:MaintetanceComponent
      },
  
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountComponent } from './discount.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { EditDiscountComponent } from './edit-discount/edit-discount.component';
import { ListDiscountComponent } from './list-discount/list-discount.component';

const routes: Routes = [
  {
    path: '', 
    component:DiscountComponent,
    children:[
      {
        path:'new-discount', component:AddDiscountComponent
      },
      {
        path:'edit-discount/:id', component:EditDiscountComponent
      },
      {
        path:'list-discount', component:ListDiscountComponent
      }
  
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscountRoutingModule { }

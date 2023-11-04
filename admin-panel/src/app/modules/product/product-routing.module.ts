import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';


const routes: Routes = [
  {
    path: '', 
    component:ProductComponent,
    children:[
     
      {
        path:'list', component:ProductListComponent
      },
      {
        path:'new', component:ProductAddComponent
      },

      {
        path:'update/:id', component:ProductUpdateComponent
      }
     

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

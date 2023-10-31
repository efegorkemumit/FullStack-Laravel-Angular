import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EccommerceComponent } from './eccommerce.component';
import { BillingComponent } from './billing/billing.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';

const routes: Routes = [
  {
    path: '', 
    component:EccommerceComponent,
    children:[
      {
        path:'billing', component:BillingComponent
      },

      {
        path:'invoice', component:InvoiceComponent
      },
      {
        path:'products', component:ProductsComponent
      },
      {
        path:'categories', component:CategoryComponent
      },
      {
        path:'new/category', component:NewcategoryComponent
      },

      {
        path:'category/update/:id', component:CategoryupdateComponent
      }
     

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EccommerceRoutingModule { }

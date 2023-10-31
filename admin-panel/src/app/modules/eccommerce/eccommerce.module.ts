import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EccommerceRoutingModule } from './eccommerce-routing.module';
import { EccommerceComponent } from './eccommerce.component';
import { ProductsComponent } from './products/products.component';
import { BillingComponent } from './billing/billing.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ElementsModule } from 'src/app/elements/elements.module';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';


@NgModule({
  declarations: [
    EccommerceComponent,
    ProductsComponent,
    BillingComponent,
    InvoiceComponent,
    CategoryComponent,
    NewcategoryComponent,
    CategoryupdateComponent
  ],
  imports: [
    CommonModule,
    EccommerceRoutingModule,
    SharedModule,
    ElementsModule,
    RouterModule,
    FormsModule
  ]
})
export class EccommerceModule { }

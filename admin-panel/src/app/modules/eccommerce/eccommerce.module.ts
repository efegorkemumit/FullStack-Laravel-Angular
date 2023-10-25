import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EccommerceRoutingModule } from './eccommerce-routing.module';
import { EccommerceComponent } from './eccommerce.component';
import { ProductsComponent } from './products/products.component';
import { BillingComponent } from './billing/billing.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EccommerceComponent,
    ProductsComponent,
    BillingComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    EccommerceRoutingModule,
    SharedModule
  ]
})
export class EccommerceModule { }

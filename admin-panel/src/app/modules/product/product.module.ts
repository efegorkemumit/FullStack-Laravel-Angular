import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ElementsModule } from 'src/app/elements/elements.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    ElementsModule,
    RouterModule,
    FormsModule
  ]
})
export class ProductModule { }

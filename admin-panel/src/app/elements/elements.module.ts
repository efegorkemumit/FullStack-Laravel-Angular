import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardWidgetComponent } from './dashboard-widget/dashboard-widget.component';
import { ProductTableComponent } from './product-table/product-table.component';



@NgModule({
  declarations: [
    DashboardWidgetComponent,
    ProductTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardWidgetComponent,
    ProductTableComponent
  ]
})
export class ElementsModule { }

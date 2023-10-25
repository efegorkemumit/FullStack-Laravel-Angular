import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardWidgetComponent } from './dashboard-widget/dashboard-widget.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    DashboardWidgetComponent,
    ProductTableComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardWidgetComponent,
    ProductTableComponent,
    LoaderComponent
  ]
})
export class ElementsModule { }

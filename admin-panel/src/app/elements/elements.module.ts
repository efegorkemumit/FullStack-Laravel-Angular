import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardWidgetComponent } from './dashboard-widget/dashboard-widget.component';



@NgModule({
  declarations: [
    DashboardWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardWidgetComponent
  ]
})
export class ElementsModule { }

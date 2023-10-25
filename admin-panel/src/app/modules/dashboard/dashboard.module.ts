import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ElementsModule } from 'src/app/elements/elements.module';
import { LastCustomersComponent } from './last-customers/last-customers.component';
import { ChartComponent } from './chart/chart.component';
import { ShippingCustomersComponent } from './shipping-customers/shipping-customers.component';
import { TableListComponent } from './table-list/table-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LastCustomersComponent,
    ChartComponent,
    ShippingCustomersComponent,
    TableListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ElementsModule
  ]
})
export class DashboardModule { }

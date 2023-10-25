import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { MaintetanceComponent } from './maintetance/maintetance.component';


@NgModule({
  declarations: [
    PagesComponent,
    Page404Component,
    Page500Component,
    MaintetanceComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

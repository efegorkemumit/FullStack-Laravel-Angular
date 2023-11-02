import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ElementsModule } from 'src/app/elements/elements.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SliderlistComponent } from './sliderlist/sliderlist.component';
import { SlidernewComponent } from './slidernew/slidernew.component';
import { SliderupdateComponent } from './sliderupdate/sliderupdate.component';


@NgModule({
  declarations: [
    SliderComponent,
    SliderlistComponent,
    SlidernewComponent,
    SliderupdateComponent
  ],
  imports: [
    CommonModule,
    SliderRoutingModule,
    SharedModule,
    ElementsModule,
    RouterModule,
    FormsModule
  ]
})
export class SliderModule { }

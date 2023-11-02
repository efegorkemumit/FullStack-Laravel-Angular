import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider.component';
import { SliderlistComponent } from './sliderlist/sliderlist.component';
import { SlidernewComponent } from './slidernew/slidernew.component';
import { SliderupdateComponent } from './sliderupdate/sliderupdate.component';


const routes: Routes = [
  {
    path: '', 
    component:SliderComponent,
    children:[
     
      {
        path:'slider', component:SliderlistComponent
      },
      {
        path:'new/slider', component:SlidernewComponent
      },

      {
        path:'slider/update/:id', component:SliderupdateComponent
      }
     

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderRoutingModule { }

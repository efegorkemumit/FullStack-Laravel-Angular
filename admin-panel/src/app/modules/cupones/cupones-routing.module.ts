import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuponesComponent } from './cupones.component';
import { AddNewCuponComponent } from './add-new-cupon/add-new-cupon.component';
import { EditCuponComponent } from './edit-cupon/edit-cupon.component';
import { ListCuponComponent } from './list-cupon/list-cupon.component';

const routes: Routes = [
  {
    path: '', 
    component:CuponesComponent,
    children:[
      {
        path:'new-cupon', component:AddNewCuponComponent
      },
      {
        path:'edit-cupon/:id', component:EditCuponComponent
      },
      {
        path:'list-cupon', component:ListCuponComponent
      }
  
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuponesRoutingModule { }

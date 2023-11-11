import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuponesRoutingModule } from './cupones-routing.module';
import { CuponesComponent } from './cupones.component';
import { AddNewCuponComponent } from './add-new-cupon/add-new-cupon.component';
import { EditCuponComponent } from './edit-cupon/edit-cupon.component';
import { ListCuponComponent } from './list-cupon/list-cupon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ElementsModule } from 'src/app/elements/elements.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CuponesComponent,
    AddNewCuponComponent,
    EditCuponComponent,
    ListCuponComponent
  ],
  imports: [
    CommonModule,
    CuponesRoutingModule,
    SharedModule,
    ElementsModule,
    RouterModule,
    FormsModule
  ]
})
export class CuponesModule { }

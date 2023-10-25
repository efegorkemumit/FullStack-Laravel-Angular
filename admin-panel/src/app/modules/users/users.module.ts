import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ElementsModule } from 'src/app/elements/elements.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UsersComponent,
    UserlistComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ElementsModule,
    RouterModule
  ]
})
export class UsersModule { }

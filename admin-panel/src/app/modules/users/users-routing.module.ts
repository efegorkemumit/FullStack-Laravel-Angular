import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DetailComponent } from './detail/detail.component';

 const routes: Routes = [
  {
    path: '', 
    component:UsersComponent,
    children:[
      {
        path:'profile', component:ProfileComponent
      },

      {
        path:'settings', component:SettingsComponent
      },
      {
        path:'userlist', component:UserlistComponent
      },
      
      {
        path:'detail/:id', component:DetailComponent
      }
     

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ProfileLockComponent } from './profile-lock/profile-lock.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '', 
    component:AuthComponent,
    children:[
      {
        path:'login', component:LoginComponent
      },
      {
        path:'register', component:RegisterComponent
      },
      {
        path:'forget-password', component:ForgetPasswordComponent
      },
      {
        path:'profile-lock', component:ProfileLockComponent
      },
      {
        path:'reset-password', component:ResetPasswordComponent
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

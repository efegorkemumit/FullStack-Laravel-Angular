import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[AnimationsModule.shake]
})
export class LoginComponent {
  email:any = null;
  password:any = null;


  constructor(
    public authService:AuthService,
    public router:Router
  ){}

  ngOnInit(): void{
    if(this.authService.user && this.authService.token){
      this.router.navigate(["/"])
    }
  }


  login(){

    if(!this.email || !this.password){
      alert("Error Username and password");
      return;
    }
    this.authService.login(this.email, this.password).subscribe((resp:any)=>{

      if(!resp.error && resp){
        document.location.reload();
      }
      else{
        if(resp.error.error == 'Unauthorized'){
          alert("No Entry");
          return;
        }
      }


    })


  }
}

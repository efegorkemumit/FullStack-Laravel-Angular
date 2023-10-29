import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';
import { AuthService } from '../auth/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations:[AnimationsModule.slideIn]
})
export class DashboardComponent {
  isLoading: boolean=true;

  email:any = null;
  password:any = null;


  constructor(
    public authService:AuthService,
    public router:Router
  ){}

  ngOnInit(): void{
    if(!this.authService.user && !this.authService.token){
      this.router.navigate(["/auth/login"])
    }

    setTimeout(()=>{
      this.isLoading=false;
    },500)
  }


}

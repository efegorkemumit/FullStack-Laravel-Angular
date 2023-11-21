import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';
import { AuthService } from '../auth/_services/auth.service';
import { Router } from '@angular/router';
import { DashboardService } from './_services/dashboard.service';

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
  userCount:number=0;
  ProductCount:number=0;
  SaleCount:number=0;


  constructor(
    public authService:AuthService,
    public router:Router,
    public dashboardService:DashboardService
  ){}

  ngOnInit(): void{
    if(!this.authService.user && !this.authService.token){
      this.router.navigate(["/auth/login"])
    }

    this.dashboardService.getUsersCount().subscribe(data=>{
      if(data){
        this.userCount= data.userCount;
        this.ProductCount= data.ProductCount;
        this.SaleCount= data.SaleCount;
      }
    })

    setTimeout(()=>{
      this.isLoading=false;
    },500)
  }


}

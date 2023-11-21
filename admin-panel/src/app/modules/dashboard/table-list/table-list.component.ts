import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';
import { DashboardService } from '../_services/dashboard.service';
import { URL_BACKEND } from 'src/config/config';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  animations:[AnimationsModule.slideIn]
})
export class TableListComponent {

  orders:any[] =[];
  
  URL=URL_BACKEND
  

  constructor(
    public dashboardService: DashboardService
  ){}

  ngOnInit():void{
   this.allproduct();
  }
  allproduct(){
   
    
    this.dashboardService.topfoursale().subscribe((resp:any)=>{
      console.log(resp);
      this.orders = resp.orders.data;
    })
  }


}

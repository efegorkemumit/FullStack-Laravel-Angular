import { Component } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'app-shipping-customers',
  templateUrl: './shipping-customers.component.html',
  styleUrls: ['./shipping-customers.component.css']
})
export class ShippingCustomersComponent {

  latestUsers:any[] =[];

  constructor(
    public dashboardService:DashboardService
  ){}

  ngOnInit(){
    this.dashboardService.getLastUsers().subscribe((data:any)=>{
      this.latestUsers = data['latest_user'];
    })
  }


}

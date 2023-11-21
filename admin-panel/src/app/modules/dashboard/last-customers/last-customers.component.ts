import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';
import { ProductService } from '../../product/_services/product.service';
import { DashboardService } from '../_services/dashboard.service';
import { URL_BACKEND } from 'src/config/config';

@Component({
  selector: 'app-last-customers',
  templateUrl: './last-customers.component.html',
  styleUrls: ['./last-customers.component.css'],
  animations:[AnimationsModule.slideIn]
})
export class LastCustomersComponent {
  products:any[] =[];
  orginalproducts:any[] =[];
  searchText:any=null;
  userId:number|undefined;
  URL=URL_BACKEND
  

  constructor(
    public dashboardService: DashboardService
  ){}

  ngOnInit():void{
   this.allproduct();
  }
  allproduct(){
   
    let LINK="";
    if(this.searchText){
      LINK = LINK+ "&search="+this.searchText;
    }
    this.dashboardService.topfourall().subscribe((resp:any)=>{
      console.log(resp);
      this.products = resp.products.data;
    })
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/_services/shared.service';
import { URL_BACKEND } from 'src/config/config';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  categories:any[] =[];
  URL=URL_BACKEND;
  products:any;
  
  constructor(
    public router:Router,
    public sharedService:SharedService,
    public homeService:HomeService
  ){}

  ngOnInit(){
    this.sharedService.getCategory().subscribe((data:any)=>{
      this.categories = data['categories'];
    })

    this.homeService.getProduct().subscribe((resp:any)=>{
      console.log(resp);
      this.products = resp.products.data
    })
  }

}

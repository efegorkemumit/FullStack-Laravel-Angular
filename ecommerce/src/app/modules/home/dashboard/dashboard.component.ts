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
  productsb:any;
  
  constructor(
    public router:Router,
    public homeService:HomeService
  ){}

  ngOnInit(){
    this.homeService.home().subscribe((resp:any)=>{
      console.log(resp);
      this.categories = resp['categories'];
      this.products = resp['product_a'];
      this.productsb = resp['product_b'];

    })

  
  }

}

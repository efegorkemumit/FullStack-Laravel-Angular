import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/_services/shared.service';
import { URL_BACKEND } from 'src/config/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories:any[] =[];
  URL=URL_BACKEND;
  
  constructor(
    public router:Router,
    public sharedService:SharedService
  ){}

  ngOnInit(){
    this.sharedService.getCategory().subscribe((data:any)=>{
      this.categories = data['categories'];
    })
  }



}

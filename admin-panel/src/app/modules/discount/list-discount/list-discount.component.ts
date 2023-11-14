import { Component } from '@angular/core';
import { DiscountService } from '../_services/discount.service';
import { URL_BACKEND } from 'src/config/config';

@Component({
  selector: 'app-list-discount',
  templateUrl: './list-discount.component.html',
  styleUrls: ['./list-discount.component.css']
})
export class ListDiscountComponent {

  discounts:any[] =[];
  orginaldiscounts:any[] =[];
  searchText:string = '';
  userId:number|undefined;
  URL=URL_BACKEND
  

  constructor(
    public discountService:DiscountService
  ){}

  ngOnInit(){
    this.discountService.getDiscount().subscribe((resp:any)=>{
      console.log(resp);
      this.discounts = resp.discounts.data;
      this.orginaldiscounts= resp.discounts.data;
    })
  }
  onSearch(){
    if(this.searchText===''){
      this.discounts = this.orginaldiscounts;
    }
    else{
      this.discounts=this.orginaldiscounts.filter(discounts=>{
        return discounts.name.toLowerCase().includes(this.searchText.toLowerCase()) 
            
      })
    }
  }
  deletediscount(id:number){
    this.discountService.deletediscount(id).subscribe(response=>{

      this.discountService.getDiscount().subscribe((resp:any)=>{
        this.discounts = resp.discounts.data;
        this.orginaldiscounts= resp.discounts.data;
      });

    },error=>{
      console.error("User Delete Failed", error);
    })
  
  }

  getTypeDes(value:any)
  {
    if(value==1){return "PRODUCT"}
    else{return "CATEGORIES"}
    
  }
  getTypeDiscou(value:any)
  {
    if(value==1){return "%"}
    else{return "$"}
    
  }
}

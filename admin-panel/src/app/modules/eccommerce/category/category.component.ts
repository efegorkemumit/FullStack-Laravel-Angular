import { Component } from '@angular/core';
import { EccomerceService } from '../_services/eccomerce.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories:any[] =[];
  orginalcategories:any[] =[];
  searchText:string = '';
  userId:number|undefined;
  

  constructor(
    public EccommerceService:EccomerceService
  ){}

  ngOnInit(){
    this.EccommerceService.getCategory().subscribe((data:any)=>{
      this.categories = data['categories'];
      this.orginalcategories= data['categories'];
    })
  }
  onSearch(){
    if(this.searchText===''){
      this.categories = this.orginalcategories;
    }
    else{
      this.categories=this.orginalcategories.filter(category=>{
        return category.name.toLowerCase().includes(this.searchText.toLowerCase()) 
            
      })
    }
  }
  

  
}

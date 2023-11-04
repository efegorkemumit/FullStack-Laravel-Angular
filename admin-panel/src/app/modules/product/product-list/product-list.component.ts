import { Component } from '@angular/core';
import { EccomerceService } from '../../eccommerce/_services/eccomerce.service';
import { URL_BACKEND } from 'src/config/config';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products:any[] =[];
  orginalproducts:any[] =[];
  searchText:string = '';
  userId:number|undefined;
  URL=URL_BACKEND
  

  constructor(
    public EccommerceService:EccomerceService
  ){}

  ngOnInit(){
    this.EccommerceService.getCategory().subscribe((data:any)=>{
      this.products = data['categories'];
      this.orginalproducts= data['categories'];
    })
  }
  onSearch(){
    if(this.searchText===''){
      this.products = this.orginalproducts;
    }
    else{
      this.products=this.orginalproducts.filter(category=>{
        return category.name.toLowerCase().includes(this.searchText.toLowerCase()) 
            
      })
    }
  }
  deleteCategory(id:number){
    this.EccommerceService.deletecategory(id).subscribe(response=>{

      this.EccommerceService.getCategory().subscribe((data:any)=>{
        this.products = data['products'];
        this.orginalproducts= data['products'];
      });

    },error=>{
      console.error("User Delete Failed", error);
    })
  }
}

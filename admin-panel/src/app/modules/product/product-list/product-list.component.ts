import { Component } from '@angular/core';
import { EccomerceService } from '../../eccommerce/_services/eccomerce.service';
import { URL_BACKEND } from 'src/config/config';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products:any[] =[];
  orginalproducts:any[] =[];
  searchText:any=null;
  userId:number|undefined;
  URL=URL_BACKEND
  

  constructor(
    public ProductService : ProductService
  ){}

  ngOnInit():void{
   this.allproduct();
  }
  allproduct(page=1){
   
    let LINK="";
    if(this.searchText){
      LINK = LINK+ "&search="+this.searchText;
    }
    this.ProductService.getProduct(page, LINK).subscribe((resp:any)=>{
      console.log(resp);
      this.products = resp.products.data;
    })
  }
  deleteCategory(id:number){
   
  }
  reset(){
    this.searchText=null;
    this.allproduct();
   
  }
}

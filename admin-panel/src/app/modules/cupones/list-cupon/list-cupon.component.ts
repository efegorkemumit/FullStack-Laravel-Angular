import { Component } from '@angular/core';
import { URL_BACKEND } from 'src/config/config';
import { EccomerceService } from '../../eccommerce/_services/eccomerce.service';

@Component({
  selector: 'app-list-cupon',
  templateUrl: './list-cupon.component.html',
  styleUrls: ['./list-cupon.component.css']
})
export class ListCuponComponent {
  categories:any[] =[];
  orginalcategories:any[] =[];
  searchText:string = '';
  userId:number|undefined;
  URL=URL_BACKEND
  

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
  deleteCategory(id:number){
  
  }
  

}

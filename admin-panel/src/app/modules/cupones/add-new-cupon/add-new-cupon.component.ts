import { Component } from '@angular/core';
import { CuponService } from '../_services/cupon.service';

@Component({
  selector: 'app-add-new-cupon',
  templateUrl: './add-new-cupon.component.html',
  styleUrls: ['./add-new-cupon.component.css']
})
export class AddNewCuponComponent {

  code:any;
  type_cupon:any=1;
  type_discount:any =1;
  discount:any=null;
  type_count:any=1;
  num_use:any=0;

  product_id:any =null;
  category_id:any =null;

  categories:any = [];
  products:any=[];

  constructor(
    public cuponService: CuponService
  ){}


  ngOnInit(): void{
    this.configall();

  }

  configall(){
    this.cuponService.configall().subscribe((resp:any)=>{
      this.categories = resp.categories,
      this.products = resp.products
    })
  }

 checkedType(value:any)
 {
  this.type_cupon =value;

 }

 checkTypeD(value:any){
  this.type_discount =value;

 }

 checkTypeC(value:any){
  this.type_count=value;
 }

}

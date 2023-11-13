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
  numusekt:any=1;

  products_selected:any = [];
  categories_selected:any = [];

  registrationSuccess = false;
  successMessage= "Registtration Successful";
  registrationError=false;
  errorMessage="Error ";

  constructor(
    public cuponService: CuponService
  ){}


  ngOnInit(): void{
    this.configall();

  }
  saveall()
  {
    if(!this.code){
      this.errorMessage="code is problem";
      this.registrationError=true;
      setTimeout(()=>{this.registrationError=false;}, 2000);return;
    }

    if(this.discount<=0){
      this.errorMessage="Discount it is problem";
      this.registrationError=true;
      setTimeout(()=>{this.registrationError=false;}, 2000);return;
    }

    
    if(this.type_count===1 && this.num_use<=0){
      this.errorMessage="User at least";
      this.registrationError=true;
      setTimeout(()=>{this.registrationError=false;}, 2000);return;
    }
    if(this.type_cupon===1 && this.products_selected.length===0)
    {
      this.errorMessage="Product add required";
      this.registrationError=true;
      setTimeout(()=>{this.registrationError=false;}, 2000);return;
    }

    if(this.type_cupon===2 && this.categories_selected.length===0)
    {
      this.errorMessage="Category add required";
      this.registrationError=true;
      setTimeout(()=>{this.registrationError=false;}, 2000);return;
    }

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
  this.products_selected=[];
  this.categories_selected=[];
  this.product_id=null;
  this.category_id=null;


 }

 checkTypeD(value:any){
  this.type_discount =value;

 }

 checkTypeC(value:any){
  this.type_count=value;
  if(this.type_count==2)
  {
    this.numusekt=2;

  }
  else
  {
    this.numusekt=1;
  }
 }
 addObject()
 {

  if(this.type_cupon==1)
  {
    let PRODUCT = this.products.find((item : {id:number})=>item.id == this.product_id);
    let INDEX = this.products_selected.findIndex((item: {id:number} )=>item.id == this.product_id);

    if(INDEX != -1)
    {
      console.log("it is danger")
      return;

    }
    else{
      this.product_id=null;
      this.products_selected.push({
        name: PRODUCT.title,
        id: PRODUCT.id
      });
    }
  }
  else{

    let CATEGORIA = this.categories.find((item : {id:number})=>item.id == this.category_id);
    let INDEX = this.categories_selected.findIndex((item: {id:number} )=>item.id == this.category_id);

    if(INDEX != -1)
    {
      console.log("it is danger")
      return;

    }
    else{
      this.category_id=null;
      this.categories_selected.push({
        name: CATEGORIA.name,
        id: CATEGORIA.id
      });
    }

  }

 }
 productD(productS: number) {
  let INDEX = this.products_selected.indexOf(productS);
  if (INDEX !== -1) {
    this.products_selected.splice(INDEX, 1);
  }
}

categorieD(categorieS: number) {
  let INDEX = this.categories_selected.indexOf(categorieS);
  if (INDEX !== -1) {
    this.categories_selected.splice(INDEX, 1);
  }
}
}

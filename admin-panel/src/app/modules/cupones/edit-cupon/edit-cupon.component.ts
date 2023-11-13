import { Component } from '@angular/core';
import { CuponService } from '../_services/cupon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-cupon',
  templateUrl: './edit-cupon.component.html',
  styleUrls: ['./edit-cupon.component.css']
})
export class EditCuponComponent {
  id:number |undefined;
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

  cupone:any ={
    code:'',
  }

  constructor(
    public cuponService: CuponService,
    public route :ActivatedRoute

  ){}


  ngOnInit(): void{
    this.route.params.subscribe(params=>{
      this.id = + params['id']
      console.log(this.id);
    });
    this.configall();
    this.showCupon();

  }

  showCupon(){

    if(this.id !==undefined)
    {
      this.cuponService.getShowCupon(this.id).subscribe((resp:any)=>{
        console.log(resp);
        this.cupone = resp.cupon;
        this.code = this.cupone.code
        this.type_discount = this.cupone.type_discount
        this.discount = this.cupone.discount
        this.type_count = this.cupone.type_count
        this.num_use = this.cupone.num_use
        this.type_discount = this.cupone.type_discount
        this.type_cupon = this.cupone.products?1:2;

        if(this.type_cupon ==1)
        {

          let PRODUCTS  = this.cupone.products.split(",");
          PRODUCTS.forEach((prod_id: number)=>{
            let PRODUCT = this.products.find((item : {id:number})=>item.id == prod_id);
            this.products_selected.push({
              name:PRODUCT.title,
              id:PRODUCT.id
            })

          })
      
          
        }

        if(this.type_cupon ==2)
        {

          let CATEGORIES  = this.cupone.categories.split(",");
          CATEGORIES.forEach((cate_id: number)=>{
            let CATEGORIA = this.categories.find((item : {id:number})=>item.id == cate_id);
            this.categories_selected.push({
              name:CATEGORIA.name,
              id:CATEGORIA.id
            })

          })
      
          
        }



        
  
      })


    }
    else
    {
      console.log("this id undefined")
    }
  


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

    let data = {

      code:this.code,
      type_discount:this.type_discount,
      discount:this.discount,
      type_count:this.type_count,
      num_use:this.num_use,
      type_cupon:this.type_cupon,
      products_selected:this.products_selected,
      categories_selected:this.categories_selected
 

    }

    this.cuponService.update(this.cupone.id, data).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.message==403){
        this.errorMessage = resp.message_text;
        this.registrationError=true;
        setTimeout(()=>{this.registrationError=false;}, 2000);return;
      }
      else{

      this.code=null;
      this.type_discount =1;
      this.discount =null;
      this.type_count =1;
      this.num_use = 0;
      this.type_cupon = 1;
      this.products_selected =[];
      this.categories_selected =[];

        this.registrationSuccess=true;
  
        setTimeout(()=>{
          this.registrationSuccess=false;
        }, 5000);
      }
    })

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
    this.num_use=0;

  }
  else
  {
    this.numusekt=1;
    this.num_use=null;
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

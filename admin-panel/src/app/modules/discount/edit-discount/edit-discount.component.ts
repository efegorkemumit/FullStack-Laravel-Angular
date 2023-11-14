import { Component } from '@angular/core';
import { DiscountService } from '../_services/discount.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-discount',
  templateUrl: './edit-discount.component.html',
  styleUrls: ['./edit-discount.component.css']
})
export class EditDiscountComponent {

  code:any;
  type_cupon:any=1;
  type_discount:any =1;
  discount:any=null;
  type_count:any=1;

  
  product_id:any =null;
  category_id:any =null;

  categories:any = [];
  products:any=[];

  start_date:any =null;
  end_date:any =null;


  products_selected:any = [];
  categories_selected:any = [];

  registrationSuccess = false;
  successMessage= "Registtration Successful";
  registrationError=false;
  errorMessage="Error ";

  id:number |undefined;
  disco:any ={
    code:'',
  }

  constructor(
    public disCountService: DiscountService,
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
      this.disCountService.getShowDiscount(this.id).subscribe((resp:any)=>{
        console.log(resp);
        this.disco = resp.discount;
        this.type_discount = this.disco.type_discount
        this.discount = this.disco.discount

        this.type_count = this.disco.state,
        this.start_date = this.disco.start_date,
        this.end_date = this.disco.end_date,

        this.type_cupon = this.disco.type

        if(this.type_cupon ==1)
        {

          this.disco.products.forEach((element: {product_id: number})=>{
            let PRODUCT = this.products.find((item : {id:number})=>item.id == element.product_id);
            this.products_selected.push({
              name:PRODUCT.title,
              id:PRODUCT.id
            })

          })
      
          
        }

        if(this.type_cupon ==2)
        {

          this.disco.categories.forEach((element: {categorie_id: number})=>{
            let CATEGORIE = this.categories.find((item : {id:number})=>item.id == element.categorie_id);
            this.categories_selected.push({
              name:CATEGORIE.name,
              id:CATEGORIE.id
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
    
    if(this.discount<=0){
      this.errorMessage="Discount it is problem";
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

    if(!this.start_date || !this.end_date)
    {
      this.errorMessage="Empty date";
      this.registrationError=true;
      setTimeout(()=>{this.registrationError=false;}, 2000);return;
    }

    let data = {

      type_discount:this.type_discount,
      discount:this.discount,
      state:this.type_count,
      start_date:this.start_date,
      end_date:this.end_date,
      products_selected:this.products_selected,
      categories_selected:this.categories_selected,
      type:this.type_cupon,
 

    }

    this.disCountService.update(this.disco.id, data).subscribe((resp:any)=>{
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
    this.disCountService.configall().subscribe((resp:any)=>{
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

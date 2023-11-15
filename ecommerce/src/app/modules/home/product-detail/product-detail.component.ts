import { Component } from '@angular/core';
import { HomeService } from '../_services/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  id:number |undefined;
  title:any=null;
  stock:any=null;
  price_dsc:any=null;
  price_usd:any=null;
  summary:any=null;
  description:any=null;
  imageEcommerce:any=null;
  sizes:any=[];
  images:any=[];
  products:any=[];
  categoryname:any=null;
  selectedSize:any;
  quantity:number = 1;


  constructor(
    public homeService:HomeService,
    public route : ActivatedRoute


  ){}

  decrement():void{

    if(this.quantity>1)
    {
      this.quantity--;
    }
  }
  increment():void
  {
    this.quantity++;
  }

  onSizeChange(selectedSize:any)
  {
    this.selectedSize = selectedSize;

  }

  ngOnInit():void
  {
    this.route.params.subscribe(params=>{
      this.id = + params['id']
      console.log(this.id);

      this.homeService.getShow(this.id).subscribe((resp:any)=>{
        console.log(resp);
        this.title = resp.product.title
        this.stock = resp.product.stock
        this.price_dsc = resp.product.price_dsc
        this.price_usd = resp.product.price_usd
        this.summary = resp.product.summary
        this.description = resp.product.description
        this.imageEcommerce = resp.product.imageEcommerce
        this.sizes = resp.product.sizes
        this.images = resp.product.images
        this.categoryname = resp.product.category.name
      
      })
    })


  }
  changeMainImage(newImage:string):void{
    this.imageEcommerce=newImage;
  }

}

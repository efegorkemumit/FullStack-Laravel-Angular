import { Component } from '@angular/core';
import { HomeService } from '../_services/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth-profile/_services/auth.service';
import { CartServicesService } from '../../ecommerce-auth/_services/cart-services.service';

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
  selectedColor:any;
  quantity:number = 1;
  productsb:any=[];
  discount_p:any;
  SizeVisible:any=1;
  type_discount:any= null;
  unit_price:any=0;
  product_size_id	:any=0;
  product_color_size_id	:any=0;

  constructor(
    public homeService:HomeService,
    public route : ActivatedRoute,
    public auth : AuthService,
    public cartService: CartServicesService,
    public router : Router


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
    this.product_size_id=selectedSize.id

  }

  onColorChange(SelectedColor:any)
  {
    this.selectedColor = SelectedColor;
    this.product_color_size_id=SelectedColor;
  }

  ngOnInit():void
  {
    this.route.params.subscribe(params=>{
      this.id = + params['id']
      console.log(this.id);

      this.homeService.productdetail(this.id).subscribe((resp:any)=>{
        console.log(resp);
        this.title = resp.product.title
        this.stock = resp.product.stock
        this.price_dsc = resp.product.price_dsc

        const lastIndex= resp.product.discount_p.length - 1;
        if(lastIndex>=0){
          this.price_usd = resp.product.discount_p[lastIndex].newPrice
          this.discount_p = resp.product.price_usd
          this.type_discount= resp.product.discount_p[lastIndex].discount_info.type_discount
          
        }
        else
        {
          this.price_usd = resp.product.price_usd
          this.discount_p = null;

        }
       
        this.summary = resp.product.summary
        this.description = resp.product.description
        this.imageEcommerce = resp.product.imageEcommerce
        this.sizes = resp.product.sizes
        this.images = resp.product.images
        this.categoryname = resp.product.category.name
        this.productsb = resp['product_a'];

        this.unit_price= resp.product.price_usd

        if(resp.product.sizes.length === 0)
        {
          this.SizeVisible=0;
        }

      


      })
    })


  }
  changeMainImage(newImage:string):void{
    this.imageEcommerce=newImage;
  }

  addCart()
  {
    if(!this.auth.user){
      this.router.navigate(['/login'])
    }

    let data= {
      user_id:this.auth.user.id,
      product_id:this.id,
      type_discount:this.type_discount,
      discount:this.price_usd,
      quantity:this.quantity,
      product_size_id: this.product_size_id ? this.product_size_id :null,
      product_color_size_id: this.product_color_size_id ? this.product_color_size_id :null,
      code_cupon:null,
      code_discount:null,
      unit_price:this.unit_price,
      subtotal:this.unit_price*this.quantity,
      total:this.price_usd*this.quantity,
 
    }

    console.log(data);

    this.cartService.create(data).subscribe((resp:any)=>{
      console.log(resp);

      if(resp.message==403)
      {
        console.log(resp.message_text)
        return;
      }
      else{
        console.log("The product has beeen added to cart");
      }
    })

    console.log(data);

  }

}

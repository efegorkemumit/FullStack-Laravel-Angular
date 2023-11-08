import { Component } from '@angular/core';
import { EccomerceService } from '../../eccommerce/_services/eccomerce.service';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute } from '@angular/router';
import { URL_BACKEND } from 'src/config/config';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {

  product_id:any=null;
  product:any ={
    title:'',
  }

  tagsName:any=null;
  tags:any=[];

  images_files:any=[];
  img_files:any=null;
  img_previews:any=null;


  images_file:any=null;

  images_preview:any =null;

  categories:any=[];
  category_id:any='';

  title:any=null;
  sku:any = null;
  pricedsc:any='';
  priceusd:any='';
  description:any=null;
  summary:any=null;
  stock:any='';


  registrationSuccess = false;
  successMessage= "Registtration Successful";
  registrationError=false;
  errorMessage="Error ";

  constructor(
    public eccommerceService: EccomerceService,
    public productService: ProductService,
    public route :ActivatedRoute

  ){}

  ngOnInit():void{
    this.eccommerceService.getCategory().subscribe((resp:any)=>{
      this.categories = resp.categories;
    })

    this.route.params.subscribe(params=>{
      this.product_id = + params['id']
      console.log(this.product_id);
      if(this.product_id){
        this.productService.getShowDetail(this.product_id).subscribe((resp:any)=>{
          console.log(resp)
          this.product =resp.product

          this.title = this.product.title
          this.sku = this.product.sku
          this.pricedsc = this.product.price_dsc
          this.priceusd = this.product.price_usd
          this.description = this.product.description
          this.summary = this.product.summary
          this.stock = this.product.stock
          this.category_id = this.product.category_id
          this.images_preview = URL_BACKEND+"storage/"+ this.product.image
          
       

        })
        
      }

    })


  
  }


  processFile(event : Event){
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      if (target.files[0].type.indexOf("image") < 0) {
        console.log("Resim dosyası değil");
        return;
      }
      this.images_file = target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.images_file);
      reader.onloadend = () => (this.images_preview = reader.result);
    }
    
  }

  addFiles(event:Event)
  {
    

  }
  addImages(){

   
  }

  removeImages(index:number)
  {

  }

  addTags(){

   
  
  }

  removeTags(index:number)
  {

  }
  crateProduct(){

   

  }
}

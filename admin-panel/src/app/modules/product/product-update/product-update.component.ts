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
  checked_interview:any=1;


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
          this.images_files = this.product.images
          this.images_preview = URL_BACKEND+"storage/"+ this.product.image
          this.tags = this.product.tags_a

          // checked_interview:any=1;
       

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
    const target  = event.target as HTMLInputElement;
    if(target.files && target.files[0]){
      if(target.files[0].type.indexOf("image")<0){
        return;
      }
      this.img_files =target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.img_files);
      reader.onloadend =()=> (this.img_previews = reader.result);
    }

  }
  addImages(){

    if(!this.img_files)
    {
      return;
    }

    let formData = new FormData();
    formData.append("product_id", this.product_id);
    formData.append("file", this.img_files);
    this.productService.imgAddimage(formData).subscribe((resp:any)=>{
      this.img_files =null;
      this.images_preview =null;
      this.images_files.unshift(resp.images);
    })

   
  }

  

  removeImages(id:number)
  {
    this.productService.imgDelete(id).subscribe(response=>{

      this.productService.getShowDetail(this.product_id).subscribe((resp:any)=>{
        this.product = resp.product;
        this.images_files = this.product.images;
      })

    })

  }

  addTags(){

    if(this.tagsName!=null){
      this.tags.push(this.tagsName)
      this.tagsName=null;
    }
  
  }

  removeTags(index:number)
  {
    this.tags.splice(index,1);

  }
  updateProduct(){

    if(this.product_id){

      if(!this.title || !this.sku || !this.pricedsc || !this.priceusd || !this.description || !this.summary
        || !this.stock || !this.category_id  )
     {
       this.errorMessage="All input required";
       this.registrationError=true;
  
       setTimeout(()=>{
         this.registrationError=false;
       }, 5000);
       return;
     }
  
     let formData =  new FormData();
      formData.append("title", this.title);
      formData.append("sku", this.sku);
      formData.append("price_dsc", this.pricedsc);
      formData.append("price_usd", this.priceusd);
      formData.append("description", this.description);
      formData.append("summary", this.summary);
      formData.append("stock", this.stock);
      formData.append("category_id", this.category_id);
      formData.append("tags", this.tags);
      formData.append("images_file", this.images_file);

      this.productService.update(this.product_id, formData).subscribe((resp:any)=>{
        this.registrationSuccess=true;
  
        setTimeout(()=>{
          this.registrationSuccess=false;
        }, 5000);
      })


    }

    

   

  }

  changeEnv(value:any){
    this.checked_interview=value;


  }
}

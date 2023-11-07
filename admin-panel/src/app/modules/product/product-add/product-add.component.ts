import { Component } from '@angular/core';
import { EccomerceService } from '../../eccommerce/_services/eccomerce.service';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
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
    public productService: ProductService
  ){}

  ngOnInit():void{
    this.eccommerceService.getCategory().subscribe((resp:any)=>{
      this.categories = resp.categories;
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

    if(this.img_files !=null){
      this.images_files.push({
        file:this.img_files,
        show:this.img_previews
      });
      this.img_files =null;
      this.img_previews =null

    }

   

  }

  removeImages(index:number)
  {
    this.images_files.splice(index,1);

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
  crateProduct(){

    if(!this.title || !this.sku || !this.pricedsc || !this.priceusd || !this.description || !this.summary
       || !this.stock || !this.category_id || !this.images_file )
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

    let index = 0;
    for(const images of this.images_files){
      formData.append("files["+index+"]", this.images_file);
      index++;
    }

    this.productService.create(formData).subscribe((resp:any)=>{
      this.registrationSuccess=true;

      setTimeout(()=>{
        this.registrationSuccess=false;
      }, 5000);


      this.title=null;
      this.sku=null;
      this.pricedsc=null;
      this.priceusd=null;
      this.description=null;
      this.summary=null;
      this.stock=null;
      this.tags=[];
      this.images_files=[];
      this.images_file=null;
      this.img_previews=null;
      

    })


  }

}

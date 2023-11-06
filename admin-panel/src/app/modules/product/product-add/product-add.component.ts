import { Component } from '@angular/core';
import { EccomerceService } from '../../eccommerce/_services/eccomerce.service';

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
  categorie_id:any='';

  constructor(
    public eccommerceService: EccomerceService
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

}

import { Component } from '@angular/core';
import { EccomerceService } from '../_services/eccomerce.service';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent {

  name:any=null;
  icon:any=null;
  images_file:any=null;

  images_preview:any =null;

  registrationSuccess = false;
  successMessage= "Registtration Successful"


  constructor(
    public eccommerceService: EccomerceService
  ){}

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
  save(){
    let formData =  new FormData();
    formData.append("images_file", this.images_file);
    formData.append("name", this.name);
    formData.append("icon", this.icon);
    this.eccommerceService.create(formData).subscribe((resp:any)=>{
      this.registrationSuccess=true;

      setTimeout(()=>{
        this.registrationSuccess=false;
      }, 5000);
    })




  }


}

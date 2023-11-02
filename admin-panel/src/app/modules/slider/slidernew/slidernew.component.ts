import { Component } from '@angular/core';
import { SliderService } from '../_service/slider.service';

@Component({
  selector: 'app-slidernew',
  templateUrl: './slidernew.component.html',
  styleUrls: ['./slidernew.component.css']
})
export class SlidernewComponent {
  title:any=null;
  description:any=null;
  urlLink:any=null;
  images_file:any=null;

  images_preview:any =null;

  registrationSuccess = false;
  successMessage= "Registtration Successful"


  constructor(
    public sliderService:SliderService
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
    formData.append("title", this.title);
    formData.append("description", this.description);
    formData.append("urlLink", this.urlLink);
    this.sliderService.create(formData).subscribe((resp:any)=>{
      this.registrationSuccess=true;

      setTimeout(()=>{
        this.registrationSuccess=false;
      }, 5000);
    })




  }


}

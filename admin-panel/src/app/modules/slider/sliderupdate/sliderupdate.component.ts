import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL_BACKEND } from 'src/config/config';
import { SliderService } from '../_service/slider.service';


@Component({
  selector: 'app-sliderupdate',
  templateUrl: './sliderupdate.component.html',
  styleUrls: ['./sliderupdate.component.css']
})
export class SliderupdateComponent {

  
  title:any=null;
  description:any=null;
  urlLink:any=null;
  images_file:any=null;

  images_preview:any =null;

  registrationSuccess = false;
  successMessage= "Registtration Successful"
  id:number |undefined;


  constructor(
    public sliderService:SliderService,
    public route :ActivatedRoute
  ){}

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id = + params['id']
      console.log(this.id);
      if(this.id){
        this.sliderService.getSliderDetail(this.id).subscribe(data=>{
          this.title= data['data']["title"];
          this.description= data['data']["description"];
          this.urlLink= data['data']["urlLink"];
          this.images_file= data['data']["images"];
          this.images_preview= URL_BACKEND+'storage/'+data['data']["images"];
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
  save(){
    if(this.id){
      if(this.images_file){

        let formData =  new FormData();
        formData.append("images_file", this.images_file);
        formData.append("title", this.title);
        formData.append("description", this.description);
        formData.append("urlLink", this.urlLink);
        this.sliderService.update(this.id, formData).subscribe((resp:any)=>{
          console.log(resp);
          this.registrationSuccess=true;
    
          setTimeout(()=>{
            this.registrationSuccess=false;
          }, 5000);
        })
        
      }
    

    }

   


   



  }
}


import { Component } from '@angular/core';
import { EccomerceService } from '../_services/eccomerce.service';

@Component({
  selector: 'app-categoryupdate',
  templateUrl: './categoryupdate.component.html',
  styleUrls: ['./categoryupdate.component.css']
})
export class CategoryupdateComponent {

  
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
  
    
  }
  save(){
   



  }
}

import { Component } from '@angular/core';
import { URL_BACKEND } from 'src/config/config';
import { SliderService } from '../_service/slider.service';


@Component({
  selector: 'app-sliderlist',
  templateUrl: './sliderlist.component.html',
  styleUrls: ['./sliderlist.component.css']
})
export class SliderlistComponent {
  slider:any[] =[];
  orginalslider:any[] =[];
  searchText:string = '';
  userId:number|undefined;
  URL=URL_BACKEND
  

  constructor(
    public sliderService:SliderService
  ){}

  ngOnInit(){
    this.sliderService.getSlider().subscribe((data:any)=>{
      this.slider = data['slider'];
      this.orginalslider= data['slider'];
    })
  }
  onSearch(){
    if(this.searchText===''){
      this.slider = this.orginalslider;
    }
    else{
      this.slider=this.orginalslider.filter(slider=>{
        return slider.name.toLowerCase().includes(this.searchText.toLowerCase()) 
            
      })
    }
  }
  deleteSlider(id:number){
    this.sliderService.deleteSlider(id).subscribe(response=>{

      this.sliderService.getSlider().subscribe((data:any)=>{
        this.slider = data['slider'];
        this.orginalslider= data['slider'];
      });

    },error=>{
      console.error("User Delete Failed", error);
    })
  }
  

  
}

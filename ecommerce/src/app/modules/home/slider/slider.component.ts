import { Component } from '@angular/core';
import { HomeService } from '../_services/home.service';
import { URL_BACKEND } from 'src/config/config';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  slides:any[] =[];
  URL=URL_BACKEND+"storage/";
  

 


  currenSlide = 0;


  constructor(
    public homeService:HomeService
  ){}

  ngOnInit(){
    this.homeService.getSlider().subscribe((data:any)=>{
      this.slides = data['slider'];
    })
  }



  nextSlide(){
    this.currenSlide = (this.currenSlide+1) % this.slides.length;
  }
  prevSlide(){
    this.currenSlide = (this.currenSlide -1 + this.slides.length ) % this.slides.length;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  slides = [
      {
        title:'Best Collection',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab, quibusdam saepe iste nemo provident.',
        imageSrc:'assets/img/slider/banner1.png'
      },

      {
        title:'True Collection',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab, quibusdam saepe iste nemo provident.',
        imageSrc:'assets/img/slider/banner2.png'
      }
   

  ];

  currenSlide = 0;

  constructor(){}

  ngOnInit(): void {}

  nextSlide(){
    this.currenSlide = (this.currenSlide+1) % this.slides.length;
  }
  prevSlide(){
    this.currenSlide = (this.currenSlide -1 + this.slides.length ) % this.slides.length;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  isLoading: boolean=true;

  ngOnInit(){
    setTimeout(()=>{
      this.isLoading=false;
    },500)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrls: ['./cupones.component.css']
})
export class CuponesComponent {
  isLoading: boolean=true;

  ngOnInit(){
    setTimeout(()=>{
      this.isLoading=false;
    },500)
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  isLoading: boolean=true;

  ngOnInit(){
    setTimeout(()=>{
      this.isLoading=false;
    },500)
  }

}

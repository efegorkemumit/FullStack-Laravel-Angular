import { Component } from '@angular/core';

@Component({
  selector: 'app-eccommerce',
  templateUrl: './eccommerce.component.html',
  styleUrls: ['./eccommerce.component.css']
})
export class EccommerceComponent {
  isLoading: boolean=true;

  ngOnInit(){
    setTimeout(()=>{
      this.isLoading=false;
    },500)
  }
}

import { Component } from '@angular/core';
import { CartServicesService } from '../_services/cart-services.service';
import { AuthService } from '../../auth-profile/_services/auth.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  listCarts:any = [];


  constructor(

    public cartService:CartServicesService,
    public auth:AuthService,
  ){}

  ngOnInit():void{

    if(!this.auth.user){
      console.log("user not authenticated");
      return;
    }
  }

}

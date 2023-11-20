import { Component } from '@angular/core';
import { CartServicesService } from '../_services/cart-services.service';
import { AuthService } from '../../auth-profile/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  full_name:any = null;
  full_surname:any = null;
  company_name:any = null;
  country:any = null;
  city:any = null;
  zip_code:any = null;
  phone:any = null;
  email:any = null;
  listCarts:any = [];

  Subtotal:any = 0;
  TotalPrice:any=0;
 

  constructor(

    public cartService:CartServicesService,
    public auth:AuthService,
    public router:Router
  ){}


  ngOnInit():void{

    if(!this.auth.user){
      this.router.navigate(['/login'])

    }

    this.cartService.basketlist().subscribe((resp:any)=>{
      console.log(resp);

      if(resp && resp.carts && resp.carts.data)
      {
        this.listCarts=resp.carts.data;
        this.calculateTotalPrice();
      }
      else
      {
        console.log("Invalid", resp);
      }

    })
  }

  calculeteTotal():number{
    return this.listCarts.reduce((sum:number, item:any)=> sum +item.total,0 )
  }

  calculeteSubTotal():number{
    return this.listCarts.reduce((sum:number, item:any)=> sum +item.subtotal,0 )
  }

  calculateTotalPrice():void
  {
    this.Subtotal = this.calculeteSubTotal();
    this.TotalPrice = this.calculeteTotal();
  }

}

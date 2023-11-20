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

  listAddress:any = [];

  Subtotal:any = 0;
  TotalPrice:any=0;
  adress_selected:any=null;
  
 

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

    this.cartService.clientaddress().subscribe((resp:any)=>{
      console.log(resp);
      this.listAddress = resp.address
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

  selectAddress(address:any)
  {

    this.adress_selected = address;
    this.full_name = address.full_name
    this.full_surname= address.full_surname
    this.company_name= address.company_name
    this.country= address.country
    this.city= address.city
    this.zip_code= address.zip_code
    this.phone= address.phone
    this.email= address.email


  }

  resetAddress()
  {

    this.adress_selected = null;
    this.full_name = null;
    this.full_surname= null;
    this.company_name= null;
    this.country= null;
    this.city= null;
    this.zip_code= null;
    this.phone= null;
    this.email=null;

  }

}

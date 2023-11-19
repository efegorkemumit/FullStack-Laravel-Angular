import { Component } from '@angular/core';
import { CartServicesService } from '../_services/cart-services.service';
import { AuthService } from '../../auth-profile/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  listCarts:any = [];
  Subtotal:any = 0;
  TotalPrice:any=0;
  cupones:any;


  constructor(

    public cartService:CartServicesService,
    public auth:AuthService,
    public router:Router
  ){}

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

  decrement(cart:any):void
  {
    if(!this.auth.user){
      this.router.navigate(['/login'])

    }

    if(cart.quantity > 1){
      cart.quantity --;

      cart.subtotal = cart.unit_price*cart.quantity;
      cart.total = cart.discount*cart.quantity;

      this.cartService.update(cart.id, cart).subscribe((resp:any)=>{

        this.calculateTotalPrice();
      })

    }

  }

  increment(cart:any):void
  {
    if(!this.auth.user){
       this.router.navigate(['/login'])
    }

    cart.quantity ++;

    cart.subtotal = cart.unit_price*cart.quantity;
    cart.total = cart.discount*cart.quantity;

    this.cartService.update(cart.id, cart).subscribe((resp:any)=>{

      this.calculateTotalPrice();
      if(resp.message==403)
      {
        console.log(resp.message_text);
        return;
      }
    })
    
  }

  deleteItem(cart:any)
  {
    if(!this.auth.user){
      this.router.navigate(['/login'])
   }


    this.cartService.delete(cart.id).subscribe();

    this.cartService.basketlist().subscribe((resp:any)=>{

      if(resp && resp.carts && resp.carts.data)
      {
        this.listCarts=resp.carts.data;
      }
      else
      {
        console.log("Invalid", resp);
      }

      

    })

    


  }
  applyCupon()
  {
    if(!this.cupones)
    {
      console.log("Input filed error")
      return;
    }
    console.log(this.cupones)
    this.cartService.applycupon(this.cupones).subscribe((resp:any)=>{
      

      
    })

    this.cartService.basketlist().subscribe((resp:any)=>{

      if(resp && resp.carts && resp.carts.data)
      {
        this.listCarts=resp.carts.data;
      }
      else
      {
        console.log("Invalid", resp);
      }

      this.calculateTotalPrice();

      

    })

  }

}

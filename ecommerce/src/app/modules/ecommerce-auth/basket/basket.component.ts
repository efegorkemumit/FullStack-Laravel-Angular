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

    this.cartService.basketlist().subscribe((resp:any)=>{
      console.log(resp);

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

  decrement(cart:any):void
  {
    if(!this.auth.user){
      console.log("user not authenticated");
      return;
    }

    if(cart.quantity > 1){
      cart.quantity --;

      cart.subtotal = cart.unit_price*cart.quantity;
      cart.total = cart.discount*cart.quantity;

      this.cartService.update(cart.id, cart).subscribe((resp:any)=>{

        console.log(resp);
      })

    }

  }

  increment(cart:any):void
  {
    if(!this.auth.user){
      console.log("user not authenticated");
      return;
    }

    cart.quantity ++;

    cart.subtotal = cart.unit_price*cart.quantity;
    cart.total = cart.discount*cart.quantity;

    this.cartService.update(cart.id, cart).subscribe((resp:any)=>{

      console.log(resp);
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
      console.log("user not authenticated");
      return;
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

}

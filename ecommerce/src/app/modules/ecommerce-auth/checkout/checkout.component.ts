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

  registrationSuccess = false;
  successMessage= "Registtration Successful"

  registrationError= false;
  errorMessage:any=null;
  
  user:any=null;
 

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

  save()
  {

    if(!this.full_name && !this.full_surname)
    {
      this.registrationError=true;
      this.errorMessage="Full name and ful surname required"
    
      setTimeout(()=>{
        this.registrationError=false;
      }, 5000);

    }

    if(!this.country && !this.city)
    {
      this.registrationError=true;
      this.errorMessage="Country and City required"
    
      setTimeout(()=>{
        this.registrationError=false;
      }, 5000);

    }

    if(!this.email && !this.phone)
    {
      this.registrationError=true;
      this.errorMessage="Email and Phone required"
    
      setTimeout(()=>{
        this.registrationError=false;
      }, 5000);

    }


    if(this.adress_selected){
      this.updateAddress();
    }
    else{
      this.addAddress();
    }

  }

  updateAddress()
  {
    let data = {


      full_name:this.full_name,
      full_surname:this.full_surname,
      company_name:this.company_name,
      country:this.country,
      city:this.city,
      zip_code:this.zip_code,
      phone:this.phone,
      email:this.email,


    }

    this.cartService.updateAddress(this.adress_selected.id, data).subscribe((resp:any)=>{
      console.log(resp);
      this.cartService.clientaddress().subscribe((resp:any)=>{
        console.log(resp);
        this.listAddress = resp.address
      })
      this.registrationSuccess=true;
      this.successMessage="Update Successfull"
    
      setTimeout(()=>{
        this.registrationSuccess=false;
      }, 5000);

    })

  }
  delete(id :number)
  {
    console.log(id);
    this.cartService.deleteAddress(id).subscribe((resp:any)=>{
      console.log(resp);

      this.cartService.clientaddress().subscribe((resp:any)=>{
        console.log(resp);
        this.listAddress = resp.address
      })

    })

   

  }

  addAddress()
  {

   

    let data = {


      full_name:this.full_name,
      full_surname:this.full_surname,
      company_name:this.company_name,
      country:this.country,
      city:this.city,
      zip_code:this.zip_code,
      phone:this.phone,
      email:this.email,


    }

    this.cartService.createAddress(data).subscribe((resp:any)=>{
      console.log(resp);
      this.cartService.clientaddress().subscribe((resp:any)=>{
        console.log(resp);
        this.listAddress = resp.address
      })
      this.registrationSuccess=true;
      this.successMessage="Create Successfull"
    
      setTimeout(()=>{
        this.registrationSuccess=false;
      }, 5000);
    })

    

  }
  Ordercomplete()
  {

    if(!this.auth.user){
      this.router.navigate(['/login'])

    }

    this.user = this.auth.user;

    if(!this.adress_selected)
    {
      this.registrationError=true;
      this.errorMessage="Select adress select"
    
      setTimeout(()=>{
        this.registrationError=false;
      }, 5000);

    }



    let orderData={
      sale:{
        user_id:this.user.id,
        total:this.TotalPrice,
        subtotal:this.Subtotal,

      },
      sale_address:{

        full_name:this.adress_selected.full_name,
        full_surname:this.adress_selected.full_surname,
        company_name:this.adress_selected.company_name,
        country:this.adress_selected.country,
        city:this.adress_selected.city,
        zip_code:this.adress_selected.zip_code,
        phone:this.adress_selected.phone,
        email:this.adress_selected.email,


      }


    }

    this.cartService.checkout(orderData).subscribe((resp:any)=>{
      console.log(resp);

      this.registrationSuccess=true;
      this.successMessage="Checkout Successfull"
    
      setTimeout(()=>{
        this.registrationSuccess=false;
      }, 5000);

    })


  }
}

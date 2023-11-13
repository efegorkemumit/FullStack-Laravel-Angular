import { Component } from '@angular/core';
import { URL_BACKEND } from 'src/config/config';
import { CuponService } from '../_services/cupon.service';

@Component({
  selector: 'app-list-cupon',
  templateUrl: './list-cupon.component.html',
  styleUrls: ['./list-cupon.component.css']
})
export class ListCuponComponent {
  cupons:any[] =[];
  orginalcupons:any[] =[];
  searchText:string = '';
  userId:number|undefined;
  URL=URL_BACKEND
  

  constructor(
    public cuponService:CuponService
  ){}

  ngOnInit(){
    this.cuponService.getCupon().subscribe((data:any)=>{
      this.cupons = data['cupons'];
      this.orginalcupons= data['cupons'];
    })
  }
  onSearch(){
    if(this.searchText===''){
      this.cupons = this.orginalcupons;
    }
    else{
      this.cupons=this.orginalcupons.filter(cupons=>{
        return cupons.name.toLowerCase().includes(this.searchText.toLowerCase()) 
            
      })
    }
  }
  deleteCupon(id:number){
    this.cuponService.deletecupon(id).subscribe(response=>{

      this.cuponService.getCupon().subscribe((data:any)=>{
        this.cupons = data['cupons'];
        this.orginalcupons= data['cupons'];
      });

    },error=>{
      console.error("User Delete Failed", error);
    })
  
  }
  

}

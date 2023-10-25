import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoading: boolean=true;

  ngOnInit(){
    setTimeout(()=>{
      this.isLoading=false;
    },500)
  }
}

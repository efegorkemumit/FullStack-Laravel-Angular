import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth-profile/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public authService:AuthService,
    public router:Router
  ){}

  mobileMenuVisible: boolean =false;

  toggleMenuOpen(){
    this.mobileMenuVisible =true;
  }

  toggleMenuClose(){
    this.mobileMenuVisible =false;
  }
  logout(){
    this.authService.logout();

  }

}

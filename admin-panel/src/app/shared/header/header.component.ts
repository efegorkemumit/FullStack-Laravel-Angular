import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';

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



  isBellMenuOpen = false;
  isInboxMenuOpen = false;
  isProfileMenuOpen= false;

  @ViewChild('menuBar') menuBar:ElementRef | undefined;
  @ViewChild('mobileMenu') mobileMenu:ElementRef | undefined;
  @ViewChild('closeMenu') closeMenu:ElementRef | undefined;

  toggleMobileMenu(){
    if(this.mobileMenu && this.menuBar){
      this.mobileMenu.nativeElement.classList.remove('hidden');
    }
  }

  closeMobileMenu(){
    if(this.mobileMenu){
      this.mobileMenu.nativeElement.classList.add('hidden');
    }
  }


  toggleBellMenu(){
    this.isBellMenuOpen = !this.isBellMenuOpen;
    this.isInboxMenuOpen = false;
    this.isProfileMenuOpen= false;
  }
  toggleInboxMenu(){
    this.isInboxMenuOpen = !this.isInboxMenuOpen;
    this.isBellMenuOpen = false;
    this.isProfileMenuOpen= false;
  }

  toggleProfileMenu(){
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
    this.isBellMenuOpen = false;
    this.isInboxMenuOpen = false;
  }

  authenticationMenuOpen =false;

  toggleAuthenticationMenu(){
    this.authenticationMenuOpen = !this.authenticationMenuOpen
  }

  eCommerceMenuOpen =false;
  
  toggleECommerce(){
    this.eCommerceMenuOpen = !this.eCommerceMenuOpen
  }

  usersOpen =false;
  
  toggleusers(){
    this.usersOpen = !this.usersOpen
  }


 
  logout(){
    this.authService.logout();

  }

}

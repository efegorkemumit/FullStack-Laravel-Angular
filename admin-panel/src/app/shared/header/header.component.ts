import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isBellMenuOpen = false;
  isInboxMenuOpen = false;
  isProfileMenuOpen= false;

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

}

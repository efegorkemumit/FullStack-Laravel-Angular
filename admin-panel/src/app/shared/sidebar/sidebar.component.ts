import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  

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

}

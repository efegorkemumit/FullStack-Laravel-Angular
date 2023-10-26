import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  mobileMenuVisible: boolean =false;

  toggleMenuOpen(){
    this.mobileMenuVisible =true;
  }

  toggleMenuClose(){
    this.mobileMenuVisible =false;
  }

}

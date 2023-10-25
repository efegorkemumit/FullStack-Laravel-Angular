import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  isLoading: boolean=true;

  ngOnInit(){
    setTimeout(()=>{
      this.isLoading=false;
    },500)
  }
}

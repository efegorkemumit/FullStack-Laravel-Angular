import { Component } from '@angular/core';
import { UserServiceService } from '../_services/user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  users:any[] =[];

  constructor(
    public userServices:UserServiceService
  ){}

  ngOnInit(){
    this.userServices.getUsers().subscribe((data:any)=>{
      this.users = data['data'];
    })
  }
}

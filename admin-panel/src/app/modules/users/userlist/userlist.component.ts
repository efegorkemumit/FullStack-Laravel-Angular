import { Component } from '@angular/core';
import { UserServiceService } from '../_services/user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  users:any[] =[];
  orginalUsers:any[] =[];
  searchText:string = '';
  userId:number|undefined;
  

  constructor(
    public userServices:UserServiceService
  ){}

  ngOnInit(){
    this.userServices.getUsers().subscribe((data:any)=>{
      this.users = data['data'];
      this.orginalUsers= data['data'];
    })
  }

  onSearch(){
    if(this.searchText===''){
      this.users = this.orginalUsers;
    }
    else{
      this.users=this.orginalUsers.filter(user=>{
        return user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
               user.email.toLowerCase().includes(this.searchText.toLowerCase());
      })
    }
  }
  deleteUser(userId:number){
    this.userServices.deleteUser(userId).subscribe(response=>{

      this.userServices.getUsers().subscribe((data:any)=>{
        this.users = data['data'];
        this.orginalUsers= data['data'];
      });

    },error=>{
      console.error("User Delete Failed", error);
    })
  }
}

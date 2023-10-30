import { Component } from '@angular/core';
import { UserServiceService } from '../_services/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  userId: number | undefined;
  userDetails:any;

  constructor(
    public userServices:UserServiceService,
    public route:ActivatedRoute
  ){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      console.log(this.userId);
  
      if (this.userId) {
        this.userServices.getUserDetail(this.userId).subscribe(data => {
          this.userDetails = data['data'];
        });
      }
    });
    this.updateUserDetail();
  }
  updateUserDetail(){
    if(this.userId){

      this.userServices.updateUserDetail(this.userId, this.userDetails).subscribe(response=>{
        console.log("User Update", response);
      }, error =>{
        console.error("Update Error:", error);
      })
    };


  }

 
}

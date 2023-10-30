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
      const userId = +params['id'];
      console.log(userId);
  
      if (userId) {
        this.userServices.getUserDetail(userId).subscribe(data => {
          this.userDetails = data['data'];
        });
      }
    });
  }
}

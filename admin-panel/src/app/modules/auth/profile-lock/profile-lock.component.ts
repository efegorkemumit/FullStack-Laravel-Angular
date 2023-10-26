import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';

@Component({
  selector: 'app-profile-lock',
  templateUrl: './profile-lock.component.html',
  styleUrls: ['./profile-lock.component.css'],
  animations:[AnimationsModule.shake]
})
export class ProfileLockComponent {

}

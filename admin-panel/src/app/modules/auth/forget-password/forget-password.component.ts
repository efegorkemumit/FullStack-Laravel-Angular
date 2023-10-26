import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  animations:[AnimationsModule.shake]
})
export class ForgetPasswordComponent {

}

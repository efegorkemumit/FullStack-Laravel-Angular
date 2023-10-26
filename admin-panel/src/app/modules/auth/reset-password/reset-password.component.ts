import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  animations:[AnimationsModule.shake]
})
export class ResetPasswordComponent {

}

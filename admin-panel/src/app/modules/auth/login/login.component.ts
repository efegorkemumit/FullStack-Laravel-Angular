import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[AnimationsModule.shake]
})
export class LoginComponent {

}

import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations:[AnimationsModule.shake]
})
export class RegisterComponent {

}

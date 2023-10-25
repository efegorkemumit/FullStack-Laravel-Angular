import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';

@Component({
  selector: 'app-last-customers',
  templateUrl: './last-customers.component.html',
  styleUrls: ['./last-customers.component.css'],
  animations:[AnimationsModule.slideIn]
})
export class LastCustomersComponent {

}

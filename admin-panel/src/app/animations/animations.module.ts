import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {trigger, transition, style, animate, keyframes} from '@angular/animations'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports:[
    BrowserAnimationsModule
  ]
})
export class AnimationsModule {
  static slideIn = trigger('slideIn',[
    transition(':enter',[
      style({transform: 'translateX(100%)'}),
      animate('500ms ease-in', style({transform: 'translateX(0)'}))
    ]),
    transition(':leave',[
      animate('500ms ease-out', style({transform: 'translateX(100%)'}))
    ]),

  ]);

  static shake = trigger('shake', [
    transition('* => *', [
      animate('300ms', keyframes([
        style({ transform: 'translateX(0)' }),
        style({ transform: 'translateX(-10px)' }),
        style({ transform: 'translateX(10px)' }),
        style({ transform: 'translateX(0)' }),
      ])),
    ]),
  ]);



 }

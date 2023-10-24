import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.css']
})
export class DashboardWidgetComponent {
  @Input() value:string;
  @Input() title:string;
  @Input() percentage:string;

  constructor(){
    this.value='';
    this.title='';
    this.percentage='';

  }
  

}

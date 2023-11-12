import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-cupon',
  templateUrl: './add-new-cupon.component.html',
  styleUrls: ['./add-new-cupon.component.css']
})
export class AddNewCuponComponent {

  type_cupon:any=1;


 checkedType(value:any)
 {
  this.type_cupon =value;

 }

}

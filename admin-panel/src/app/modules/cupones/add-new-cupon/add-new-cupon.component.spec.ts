import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCuponComponent } from './add-new-cupon.component';

describe('AddNewCuponComponent', () => {
  let component: AddNewCuponComponent;
  let fixture: ComponentFixture<AddNewCuponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCuponComponent]
    });
    fixture = TestBed.createComponent(AddNewCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

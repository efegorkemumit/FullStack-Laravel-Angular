import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCuponComponent } from './edit-cupon.component';

describe('EditCuponComponent', () => {
  let component: EditCuponComponent;
  let fixture: ComponentFixture<EditCuponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCuponComponent]
    });
    fixture = TestBed.createComponent(EditCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

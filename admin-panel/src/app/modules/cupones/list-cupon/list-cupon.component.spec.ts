import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuponComponent } from './list-cupon.component';

describe('ListCuponComponent', () => {
  let component: ListCuponComponent;
  let fixture: ComponentFixture<ListCuponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCuponComponent]
    });
    fixture = TestBed.createComponent(ListCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

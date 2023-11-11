import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponesComponent } from './cupones.component';

describe('CuponesComponent', () => {
  let component: CuponesComponent;
  let fixture: ComponentFixture<CuponesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuponesComponent]
    });
    fixture = TestBed.createComponent(CuponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EccommerceComponent } from './eccommerce.component';

describe('EccommerceComponent', () => {
  let component: EccommerceComponent;
  let fixture: ComponentFixture<EccommerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EccommerceComponent]
    });
    fixture = TestBed.createComponent(EccommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

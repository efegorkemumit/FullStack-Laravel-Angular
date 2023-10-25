import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintetanceComponent } from './maintetance.component';

describe('MaintetanceComponent', () => {
  let component: MaintetanceComponent;
  let fixture: ComponentFixture<MaintetanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintetanceComponent]
    });
    fixture = TestBed.createComponent(MaintetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

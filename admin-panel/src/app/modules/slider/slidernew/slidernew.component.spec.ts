import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidernewComponent } from './slidernew.component';

describe('SlidernewComponent', () => {
  let component: SlidernewComponent;
  let fixture: ComponentFixture<SlidernewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidernewComponent]
    });
    fixture = TestBed.createComponent(SlidernewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

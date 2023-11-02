import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderupdateComponent } from './sliderupdate.component';

describe('SliderupdateComponent', () => {
  let component: SliderupdateComponent;
  let fixture: ComponentFixture<SliderupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderupdateComponent]
    });
    fixture = TestBed.createComponent(SliderupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

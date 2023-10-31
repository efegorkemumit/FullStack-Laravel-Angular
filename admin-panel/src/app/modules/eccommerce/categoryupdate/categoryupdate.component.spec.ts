import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryupdateComponent } from './categoryupdate.component';

describe('CategoryupdateComponent', () => {
  let component: CategoryupdateComponent;
  let fixture: ComponentFixture<CategoryupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryupdateComponent]
    });
    fixture = TestBed.createComponent(CategoryupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleAComponent } from './lifecycle-a.component';

describe('LifecycleAComponent', () => {
  let component: LifecycleAComponent;
  let fixture: ComponentFixture<LifecycleAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecycleAComponent]
    });
    fixture = TestBed.createComponent(LifecycleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

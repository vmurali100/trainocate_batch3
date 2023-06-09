import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleBComponent } from './lifecycle-b.component';

describe('LifecycleBComponent', () => {
  let component: LifecycleBComponent;
  let fixture: ComponentFixture<LifecycleBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecycleBComponent]
    });
    fixture = TestBed.createComponent(LifecycleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

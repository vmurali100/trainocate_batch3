import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GindiComponent } from './gindi.component';

describe('GindiComponent', () => {
  let component: GindiComponent;
  let fixture: ComponentFixture<GindiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GindiComponent]
    });
    fixture = TestBed.createComponent(GindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

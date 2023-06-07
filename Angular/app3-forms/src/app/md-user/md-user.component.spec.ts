import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdUserComponent } from './md-user.component';

describe('MdUserComponent', () => {
  let component: MdUserComponent;
  let fixture: ComponentFixture<MdUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdUserComponent]
    });
    fixture = TestBed.createComponent(MdUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

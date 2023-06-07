import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormTdfComponent } from './registration-form-tdf.component';

describe('RegistrationFormTdfComponent', () => {
  let component: RegistrationFormTdfComponent;
  let fixture: ComponentFixture<RegistrationFormTdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFormTdfComponent]
    });
    fixture = TestBed.createComponent(RegistrationFormTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormMdfComponent } from './registration-form-mdf.component';

describe('RegistrationFormMdfComponent', () => {
  let component: RegistrationFormMdfComponent;
  let fixture: ComponentFixture<RegistrationFormMdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFormMdfComponent]
    });
    fixture = TestBed.createComponent(RegistrationFormMdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

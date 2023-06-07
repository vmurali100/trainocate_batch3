import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatheDetailsComponent } from './weathe-details.component';

describe('WeatheDetailsComponent', () => {
  let component: WeatheDetailsComponent;
  let fixture: ComponentFixture<WeatheDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatheDetailsComponent]
    });
    fixture = TestBed.createComponent(WeatheDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

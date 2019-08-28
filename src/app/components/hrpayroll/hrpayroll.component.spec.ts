import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrpayrollComponent } from './hrpayroll.component';

describe('HrpayrollComponent', () => {
  let component: HrpayrollComponent;
  let fixture: ComponentFixture<HrpayrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrpayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrpayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

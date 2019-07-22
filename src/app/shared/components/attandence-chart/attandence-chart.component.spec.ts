import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandenceChartComponent } from './attandence-chart.component';

describe('AttandenceChartComponent', () => {
  let component: AttandenceChartComponent;
  let fixture: ComponentFixture<AttandenceChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttandenceChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttandenceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

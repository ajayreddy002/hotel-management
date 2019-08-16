import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPopComponent } from './action-pop.component';

describe('ActionPopComponent', () => {
  let component: ActionPopComponent;
  let fixture: ComponentFixture<ActionPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

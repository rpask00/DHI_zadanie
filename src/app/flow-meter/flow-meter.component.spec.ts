import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowMeterComponent } from './flow-meter.component';

describe('FlowMeterComponent', () => {
  let component: FlowMeterComponent;
  let fixture: ComponentFixture<FlowMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

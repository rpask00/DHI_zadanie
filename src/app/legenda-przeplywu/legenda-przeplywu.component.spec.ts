import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendaPrzeplywuComponent } from './legenda-przeplywu.component';

describe('LegendaPrzeplywuComponent', () => {
  let component: LegendaPrzeplywuComponent;
  let fixture: ComponentFixture<LegendaPrzeplywuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendaPrzeplywuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendaPrzeplywuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

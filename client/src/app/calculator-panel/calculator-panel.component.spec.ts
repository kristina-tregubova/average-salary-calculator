import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorPanelComponent } from './calculator-panel.component';

describe('CalculatorPanelComponent', () => {
  let component: CalculatorPanelComponent;
  let fixture: ComponentFixture<CalculatorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

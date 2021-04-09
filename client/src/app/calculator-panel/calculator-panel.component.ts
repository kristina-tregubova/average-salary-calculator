import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-panel',
  templateUrl: './calculator-panel.component.html',
  styleUrls: ['./calculator-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

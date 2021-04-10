import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CalculationResults, FormType } from '../../models/form';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent {

  @Input() calculationResults: CalculationResults;
  @Input() formType: FormType;

  readonly formTypes = FormType;


}

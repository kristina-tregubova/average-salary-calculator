import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Months, onlyNumbersRegExp } from '../../models/helper';
import { CalculatorService } from '../../services/calculator.service';
import { CalculationResults } from '../../models/form';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {

  formData: FormGroup = new FormGroup({
    grossMonthlySalary: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(onlyNumbersRegExp)]),
    month: new FormControl('', Validators.required),
    isThirteensSalaryChecked: new FormControl(''),
  });
  calculationResults$: Observable<CalculationResults>;

  readonly months = Months;

  constructor(
    private calculatorService: CalculatorService
  ) {}

  public onFormSubmit(): void {
    console.warn(this.formData.value);

    this.calculationResults$ = this.calculatorService.sendFormData(this.formData.value);
    this.formData.reset(this.formData.value);
  }

  public onResetClick(): void {
    this.formData.reset();
  }

}

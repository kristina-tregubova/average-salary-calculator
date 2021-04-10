import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Months, onlyNumbersRegExp } from '../../models/helper';
import { CalculatorService } from '../../services/calculator.service';
import { CalculationResults, FormType } from '../../models/form';

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

  @Input() formType: FormType;
  
  @Output() gotCalculationResults: EventEmitter<CalculationResults> = new EventEmitter();

  readonly months = Months;
  readonly formTypes = FormType;

  constructor(
    private calculatorService: CalculatorService
  ) {}

  public onFormSubmit(): void {
    console.warn(this.formData.value);

    this.calculatorService.sendFormData(this.formData.value).subscribe((res) => {
      this.gotCalculationResults.emit(res);
    }); // todo: add loader
    this.formData.reset(this.formData.value);
  }

  public onResetClick(): void {
    this.formData.reset();
  }

}

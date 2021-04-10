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
export class FormComponent implements OnInit {

  formData: FormGroup = new FormGroup({
    grossMonthlySalary: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(onlyNumbersRegExp)]),
    isThirteensSalaryChecked: new FormControl(''),
  });

  @Input() formType: FormType;
  
  @Output() gotCalculationResults: EventEmitter<CalculationResults> = new EventEmitter();

  readonly months = Months;
  readonly formTypes = FormType;

  constructor(
    private calculatorService: CalculatorService
  ) {}

  ngOnInit() {
    this.defineControlsForFormType();
  }

  private defineControlsForFormType(): void {
    if (this.formType === FormType.SalaryForGivenMonth) {
      this.formData.addControl('month', new FormControl(Months[0], Validators.required));
    }
  }

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

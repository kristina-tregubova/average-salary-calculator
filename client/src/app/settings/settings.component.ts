import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { onlyNumbersRegExp } from '../models/helper';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

  initialValue: number;
  formData: FormGroup = new FormGroup({
    customIndex: new FormControl('', [Validators.required, Validators.pattern(onlyNumbersRegExp)]) // non-integral numbers?
  })

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit() {
    this.getCurrentIndexValue();
  }

  private getCurrentIndexValue(): void {
    this.calculatorService.getCurrentIndex().subscribe((value) => {
      this.formData.patchValue({ customIndex: value });
      this.initialValue = value;
    });
  }

  public onFormSubmit(): void {
    this.calculatorService.setCustomIndex(this.formData.value); // todo: add error handling
    this.formData.reset(this.formData.value);
  }

  public onResetClick(): void {
    this.formData.reset();
    this.calculatorService.resetCustomIndex().subscribe((value) => {
      this.formData.patchValue({ customIndex: value })
    });
  }

}

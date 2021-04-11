import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { onlyNumbersRegExp } from '../models/helper';
import { CalculatorService } from '../services/calculator.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

  initialValue: number;
  formData: FormGroup = new FormGroup({
    index: new FormControl('', [Validators.required, Validators.pattern(onlyNumbersRegExp)]) // non-integral numbers?
  })

  constructor(
    private calculatorService: CalculatorService,
    private detector: ChangeDetectorRef,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.getCurrentIndexValue();
  }

  private getCurrentIndexValue(): void {
    this.calculatorService.getCurrentIndex().subscribe((value) => {
      this.setNewIndexValue(value);
    });
  }

  public onFormSubmit(): void {
    this.calculatorService.setCustomIndex(this.formData.value).subscribe((value) => {
      this.setNewIndexValue(value);
    }); // todo: add error handling
  }

  public onResetClick(): void {
    this.calculatorService.resetCustomIndex().subscribe((value) => {
      this.setNewIndexValue(value);
    });
  }

  private setNewIndexValue(value: number): void {
    this.formData.reset({index: value});
      this.initialValue = value;
      this.detector.markForCheck();
  }

}

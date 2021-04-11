import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { onlyNumbersRegExp } from '../models/helper';
import { CalculatorService } from '../services/calculator.service';
import { Indices } from '../models/indices';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

  formData: FormGroup = new FormGroup({
    x1: new FormControl('', [Validators.required, Validators.pattern(onlyNumbersRegExp)]), // non-integral numbers?
    x2: new FormControl('', [Validators.required, Validators.pattern(onlyNumbersRegExp)]), // non-integral numbers?
    x3: new FormControl('', [Validators.required, Validators.pattern(onlyNumbersRegExp)]), // non-integral numbers?
    x4: new FormControl('', [Validators.required, Validators.pattern(onlyNumbersRegExp)]), // non-integral numbers?
    x5: new FormControl('', [Validators.required, Validators.pattern(onlyNumbersRegExp)]) // non-integral numbers?
  })
  indices: Indices;

  constructor(
    private calculatorService: CalculatorService,
    private detector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getCurrentIndexValue();
  }

  private getCurrentIndexValue(): void {
    this.calculatorService.getCurrentIndices().subscribe((value: Indices) => {
      this.setNewIndicesValue(value);
    });
  }

  public onFormSubmit(): void {
    this.calculatorService.setCustomIndices(this.formData.value).subscribe((value: Indices) => {
      this.setNewIndicesValue(value);
    }); // todo: add error handling
  }

  public onResetClick(key: string): void {
    this.calculatorService.resetCustomIndex(key).subscribe((value: Indices) => {
      this.setNewIndicesValue(value);
    });
  }

  public onResetAllClick(): void {
    this.calculatorService.resetAllIndices().subscribe((value: Indices) => {
      this.setNewIndicesValue(value);
    });
  }

  private setNewIndicesValue(value: Indices): void {
    this.indices = new Indices(value);
    this.formData.reset(this.indices);
    this.detector.markForCheck();
  }

}

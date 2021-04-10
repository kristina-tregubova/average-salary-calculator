import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalculationResults, FormType } from '../models/form';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-calculator-panel',
  templateUrl: './calculator-panel.component.html',
  styleUrls: ['./calculator-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorPanelComponent implements OnInit {

  calculationResults: CalculationResults;
  currentUrl: string;
  formType: FormType;

  constructor(
    private router: ActivatedRoute
  ) {
    this.router.url.pipe(map((segments) => segments.join("/"))).subscribe((res) => this.currentUrl = res);
  }

  ngOnInit() {
    this.defineFormType();
  }

  public assignResults(results: CalculationResults): void {
    this.calculationResults = results;
  }

  private defineFormType(): void {
    this.formType = this.currentUrl.includes(FormType.AverageMonthlySalary)
      ? FormType.AverageMonthlySalary
      : FormType.SalaryForGivenMonth;
  }

}

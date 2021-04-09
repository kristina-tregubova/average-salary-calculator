import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CalculationResults } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  sendFormData(formData: FormData): Observable<CalculationResults> {
    // stub
    const results: CalculationResults = {averageMonthlySalary: 170000, annualIncome: 2000000, salaryForGivenMonth: null};
    return of(results);
  }

  getCurrentIndex(): Observable<number> {
    // stub
    return of(2);
  }

  setCustomIndex(indexValue: number): Observable<boolean> {
    // stub
    return of(true);
  }

  resetCustomIndex(): Observable<number> {
    // stub
    return of(2);
  }
}

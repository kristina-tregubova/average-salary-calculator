import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculationResults } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  readonly baseUrl = 'http://localhost:3000';
  
  constructor(
    private http: HttpClient
  ) { }

  sendFormData(formData: FormData): Observable<CalculationResults> {
    const url = `${this.baseUrl}/sendFormData`;
    return this.http.post<CalculationResults>(url, formData);
  }

  // returns custom index if there is any, otherwise -> default
  getCurrentIndex(): Observable<number> {
    const url = `${this.baseUrl}/getCurrentIndex`;
    return this.http.get<number>(url);
  }

  // returns custom index
  setCustomIndex(index: { [key: string]: string; } ): Observable<number> {
    const url = `${this.baseUrl}/setCustomIndex`;
    return this.http.put<number>(url, index);
  }

  // return default index
  resetCustomIndex(): Observable<number> {
    const url = `${this.baseUrl}/resetCustomIndex`;
    return this.http.get<number>(url);
  }
}

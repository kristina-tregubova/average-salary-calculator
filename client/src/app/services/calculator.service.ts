import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalculationResults } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  readonly baseUrl = 'localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  sendFormData(formData: FormData): Observable<CalculationResults> {
    const url = `${this.baseUrl}/sendFormData`;
    return this.http.post<CalculationResults>(url, formData, this.httpOptions);
  }

  // returns custom index if there is any, otherwise -> default
  getCurrentIndex(): Observable<number> {
    const url = `${this.baseUrl}/getCurrentIndex`;
    return this.http.get<number>(url);
  }

  // returns custom index
  setCustomIndex(indexValue: number): Observable<number> {
    const url = `${this.baseUrl}/setCurrentIndex`;
    return this.http.put<number>(url, indexValue, this.httpOptions);
  }

  // return default index
  resetCustomIndex(): Observable<number> {
    const url = `${this.baseUrl}/resetCustomIndex`;
    return this.http.get<number>(url);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalculationResults } from '../models/form';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  withCredentials: true,
};

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
    return this.http.post<CalculationResults>(url, formData, httpOptions);
  }

  // returns custom index if there is any, otherwise -> default
  getCurrentIndex(): Observable<number> {
    const url = `${this.baseUrl}/getCurrentIndex`;
    return this.http.get<number>(url, httpOptions);
  }

  // returns custom index
  setCustomIndex(indexValue: number): Observable<number> {
    const url = `${this.baseUrl}/setCurrentIndex`;
    return this.http.put<number>(url, indexValue);
  }

  // return default index
  resetCustomIndex(): Observable<number> {
    const url = `${this.baseUrl}/resetCustomIndex`;
    return this.http.get<number>(url);
  }
}

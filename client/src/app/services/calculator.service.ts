import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculationResults } from '../models/form';
import { Indices } from '../models/indices';

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

  getCurrentIndices(): Observable<Indices> {
    const url = `${this.baseUrl}/getCurrentIndices`;
    return this.http.get<Indices>(url);
  }

  setCustomIndices(indices: Indices): Observable<Indices> {
    const url = `${this.baseUrl}/setCustomIndices`;
    return this.http.put<Indices>(url, indices);
  }

  resetCustomIndex(key: string): Observable<Indices> {
    const keyValuePair = { keyName: key };
    const url = `${this.baseUrl}/resetCustomIndex`;
    return this.http.put<Indices>(url, keyValuePair);
  }

  resetAllIndices(): Observable<Indices> {
    const url = `${this.baseUrl}/resetAllIndices`;
    return this.http.get<Indices>(url);
  }
}

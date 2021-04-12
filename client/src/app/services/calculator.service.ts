import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculationResults } from '../models/form';
import { Indices } from '../models/indices';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  
  constructor(
    private http: HttpClient
  ) { }

  sendFormData(formData: FormData): Observable<CalculationResults> {
    const url = `${environment.baseUrl}/sendFormData`;
    return this.http.post<CalculationResults>(url, formData);
  }

  getCurrentIndices(): Observable<Indices> {
    const url = `${environment.baseUrl}/getCurrentIndices`;
    return this.http.get<Indices>(url);
  }

  setCustomIndices(indices: Indices): Observable<Indices> {
    const url = `${environment.baseUrl}/setCustomIndices`;
    return this.http.put<Indices>(url, indices);
  }

  resetCustomIndex(key: string): Observable<Indices> {
    const keyValuePair = { keyName: key };
    const url = `${environment.baseUrl}/resetCustomIndex`;
    return this.http.put<Indices>(url, keyValuePair);
  }

  resetAllIndices(): Observable<Indices> {
    const url = `${environment.baseUrl}/resetAllIndices`;
    return this.http.get<Indices>(url);
  }
}

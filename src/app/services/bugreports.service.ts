import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { BUGREPORT } from '../interfaces';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BugreportsService {
  apiUrl: string = 'http://localhost:5000/bugs';
  constructor(private http: HttpClient) {}
  getReports(): Observable<BUGREPORT[]> {
    return this.http.get<BUGREPORT[]>(this.apiUrl);
  }
  updateReport(report: BUGREPORT): Observable<BUGREPORT> {
    return this.http.patch<BUGREPORT>(
      `${this.apiUrl}/${report.id}`,
      report,
      httpOptions
    );
  }
}

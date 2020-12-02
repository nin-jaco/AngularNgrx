import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Period, ToastService } from '../core';
// import { PeriodsModule } from './periods.module';

const api = '/api';

@Injectable({ providedIn: 'root' })
export class PeriodService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/periods`;
    const msg = 'Periods retrieved successfully!';
    return this.http
      .get<Period[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(period: Period) {
    return this.http
      .delete(`${api}/hr/periods/${period.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Period ${period.name} deleted`, 'DELETE')
        )
      );
  }

  add(period: Period) {
    return this.http
      .post<Period>(`${api}/hr/periods/`, period)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Period ${period.name} added`, 'POST')
        )
      );
  }

  update(period: Period) {
    return this.http
      .put<Period>(`${api}/hr/periods/${period.id}`, period)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Period ${period.name} updated`, 'PUT')
        )
      );
  }
}

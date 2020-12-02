import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { QuarterType, ToastService } from '../core';
// import { QuarterTypeModule } from './quarter-types.module';

const api = '/api';

@Injectable({ providedIn: 'root' })
export class QuarterTypeService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/hr/quarterTypes`;
    const msg = 'QuarterTypes retrieved successfully!';
    return this.http
      .get<QuarterType[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(quarterType: QuarterType) {
    return this.http
      .delete(`${api}/hr/quarterType/${quarterType.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`QuarterType ${quarterType.description} deleted`, 'DELETE')
        )
      );
  }

  add(quarterType: QuarterType) {
    return this.http
      .post<QuarterType>(`${api}/hr/quarterType/`, quarterType)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`QuarterType ${quarterType.description} added`, 'POST')
        )
      );
  }

  update(quarterType: QuarterType) {
    return this.http
      .put<QuarterType>(`${api}/hr/quarterType/${quarterType.id}`, quarterType)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`QuarterType ${quarterType.description} updated`, 'PUT')
        )
      );
  }
}

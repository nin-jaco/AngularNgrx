import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { GoalStatus, ToastService } from '../core';
// import { GoalStatusesModule } from './goalStatuses.module';

const api = 'https://localhost:44324/api';

@Injectable({ providedIn: 'root' })
export class GoalStatusService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/hr/goalstatuses`;
    const msg = 'GoalStatuses retrieved successfully!';
    return this.http
      .get<GoalStatus[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(goalStatus: GoalStatus) {
    return this.http
      .delete(`${api}/hr/goalstatus/${goalStatus.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`GoalStatus ${goalStatus.description} deleted`, 'DELETE')
        )
      );
  }

  add(goalStatus: GoalStatus) {
    return this.http
      .post<GoalStatus>(`${api}/hr/goalstatus/`, goalStatus)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`GoalStatus ${goalStatus.description} added`, 'POST')
        )
      );
  }

  update(goalStatus: GoalStatus) {
    return this.http
      .put<GoalStatus>(`${api}/hr/goalstatus/${goalStatus.id}`, goalStatus)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`GoalStatus ${goalStatus.description} updated`, 'PUT')
        )
      );
  }
}

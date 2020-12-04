import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from '@app/core';
import { TGoalStatus } from '@app/core/model/TGoalStatus';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

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
    return this.http.get<TGoalStatus[]>(url).pipe(
      tap(() => this.toastService.openSnackBar(msg, 'GET')),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(goalStatus: TGoalStatus) {
    return this.http
      .delete(`${api}/hr/goalstatus/${goalStatus.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `GoalStatus ${goalStatus.description} deleted`,
            'DELETE'
          )
        )
      );
  }

  add(goalStatus: TGoalStatus) {
    return this.http
      .post<TGoalStatus>(`${api}/hr/goalstatus/`, goalStatus)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `GoalStatus ${goalStatus.description} added`,
            'POST'
          )
        )
      );
  }

  update(goalStatus: TGoalStatus) {
    return this.http
      .put<TGoalStatus>(`${api}/hr/goalstatus/${goalStatus.id}`, goalStatus)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `GoalStatus ${goalStatus.description} updated`,
            'PUT'
          )
        )
      );
  }
}

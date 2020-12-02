import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Goal, ToastService } from '../core';
// import { GoalsModule } from './goals.module';

const api = '/api/hr';

@Injectable({ providedIn: 'root' })
export class GoalService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/goals`;
    const msg = 'Goals retrieved successfully!';
    return this.http
      .get<Goal[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(goal: Goal) {
    return this.http
      .delete(`${api}/goals/${goal.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Goal ${goal.id} deleted`, 'DELETE')
        )
      );
  }

  add(goal: Goal) {
    return this.http
      .post<Goal>(`${api}/goals/`, goal)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Goal ${goal.id} added`, 'POST')
        )
      );
  }

  update(goal: Goal) {
    return this.http
      .put<Goal>(`${api}/goals/${goal.id}`, goal)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Goal ${goal.id} updated`, 'PUT')
        )
      );
  }
}

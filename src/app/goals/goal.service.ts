import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TGoal } from '@app/core/model/TGoal';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ToastService } from '../core';
// import { GoalsModule } from './goals.module';

const api = 'https://localhost:44324/api';

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
    const url = `${api}/hr/goals`;
    const msg = 'Goals retrieved successfully!';
    return this.http.get<TGoal[]>(url).pipe(
      tap(() => this.toastService.openSnackBar(msg, 'GET')),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(goal: TGoal) {
    return this.http
      .delete(`${api}/hr/goals/${goal.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Goal ${goal.name} deleted`, 'DELETE')
        )
      );
  }

  add(goal: TGoal) {
    return this.http
      .post<TGoal>(`${api}/hr/goals/`, goal)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Goal ${goal.name} added`, 'POST')
        )
      );
  }

  update(goal: TGoal) {
    return this.http
      .put<TGoal>(`${api}/hr/goals/${goal.name}`, goal)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Goal ${goal.name} updated`, 'PUT')
        )
      );
  }
}

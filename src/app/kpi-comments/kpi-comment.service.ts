import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { KpiComment, ToastService } from '../core';
// import { KpiCommentsModule } from './hr/kpicomments.module';

const api = 'https://localhost:44324/api';

@Injectable({ providedIn: 'root' })
export class KpiCommentService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/hr/kpicomments`;
    const msg = 'KpiComments retrieved successfully!';
    return this.http
      .get<KpiComment[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(kpiComment: KpiComment) {
    return this.http
      .delete(`${api}/hr/kpicomments/${kpiComment.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`KpiComment ${kpiComment.description} deleted`, 'DELETE')
        )
      );
  }

  add(kpiComment: KpiComment) {
    return this.http
      .post<KpiComment>(`${api}/hr/kpicomments/`, kpiComment)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`KpiComment ${kpiComment.description} added`, 'POST')
        )
      );
  }

  update(kpiComment: KpiComment) {
    return this.http
      .put<KpiComment>(`${api}/hr/kpicomments/${kpiComment.id}`, kpiComment)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`KpiComment ${kpiComment.description} updated`, 'PUT')
        )
      );
  }
}

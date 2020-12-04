import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ToastService } from '../core';
import { TRating } from '../core/model/TRating';
// import { RatingesModule } from './ratinges.module';

const api = 'https://localhost:44324/api';

@Injectable({ providedIn: 'root' })
export class RatingService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/hr/ratings`;
    const msg = 'Ratings retrieved successfully!';
    return this.http.get<TRating[]>(url).pipe(
      tap(() => this.toastService.openSnackBar(msg, 'GET')),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(rating: TRating) {
    return this.http
      .delete(`${api}/hr/ratings/${rating.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `Rating ${rating.description} deleted`,
            'DELETE'
          )
        )
      );
  }

  add(rating: TRating) {
    return this.http
      .post<TRating>(`${api}/hr/ratings/`, rating)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `Rating ${rating.description} added`,
            'POST'
          )
        )
      );
  }

  update(rating: TRating) {
    return this.http
      .put<TRating>(`${api}/hr/ratings/${rating.id}`, rating)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `Rating ${rating.description} updated`,
            'PUT'
          )
        )
      );
  }
}

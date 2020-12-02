import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Rating, ToastService } from '../core';
// import { RatingesModule } from './ratinges.module';

const api = '/api';

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
    return this.http
      .get<Rating[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(rating: Rating) {
    return this.http
      .delete(`${api}/hr/rating/${rating.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Rating ${rating.description} deleted`, 'DELETE')
        )
      );
  }

  add(rating: Rating) {
    return this.http
      .post<Rating>(`${api}/hr/rating/`, rating)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Rating ${rating.description} added`, 'POST')
        )
      );
  }

  update(rating: Rating) {
    return this.http
      .put<Rating>(`${api}/hr/rating/${rating.id}`, rating)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Rating ${rating.description} updated`, 'PUT')
        )
      );
  }
}

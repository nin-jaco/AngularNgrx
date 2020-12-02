import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { StatusType, ToastService } from '../core';
// import { StatusTypesModule } from './statusTypes.module';

const api = 'https://localhost:44324/api';

@Injectable({ providedIn: 'root' })
export class StatusTypeService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/hr/statusTypes`;
    const msg = 'StatusTypes retrieved successfully!';
    return this.http
      .get<StatusType[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(statusType: StatusType) {
    return this.http
      .delete(`${api}/hr/statusTypes/${statusType.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`StatusType ${statusType.description} deleted`, 'DELETE')
        )
      );
  }

  add(statusType: StatusType) {
    return this.http
      .post<StatusType>(`${api}/hr/statusTypes/`, statusType)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`StatusType ${statusType.description} added`, 'POST')
        )
      );
  }

  update(statusType: StatusType) {
    return this.http
      .put<StatusType>(`${api}/hr/statusTypes/${statusType.id}`, statusType)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`StatusType ${statusType.description} updated`, 'PUT')
        )
      );
  }
}

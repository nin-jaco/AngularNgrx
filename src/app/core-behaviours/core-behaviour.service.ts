import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { CoreBehaviour, ToastService } from '../core';
// import { CoreBehavioursModule } from './coreBehaviours.module';

const api = 'https://localhost:44324/api';

@Injectable({ providedIn: 'root' })
export class CoreBehaviourService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/hr/corebehaviours`;
    const msg = 'CoreBehaviours retrieved successfully!';
    return this.http
      .get<CoreBehaviour[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(coreBehaviour: CoreBehaviour) {
    return this.http
      .delete(`${api}/hr/corebehaviours/${coreBehaviour.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`CoreBehaviour ${coreBehaviour.id} deleted`, 'DELETE')
        )
      );
  }

  add(coreBehaviour: CoreBehaviour) {
    return this.http
      .post<CoreBehaviour>(`${api}/hr/corebehaviours/`, coreBehaviour)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`CoreBehaviour ${coreBehaviour.id} added`, 'POST')
        )
      );
  }

  update(coreBehaviour: CoreBehaviour) {
    return this.http
      .put<CoreBehaviour>(`${api}/hr/corebehaviours/${coreBehaviour.id}`, coreBehaviour)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`CoreBehaviour ${coreBehaviour.id} updated`, 'PUT')
        )
      );
  }
}

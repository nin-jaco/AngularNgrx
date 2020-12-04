import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from '@app/core';
import { TCoreBehaviour } from '@app/core/model/TCoreBehaviour';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

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
    return this.http.get<TCoreBehaviour[]>(url).pipe(
      tap(() => this.toastService.openSnackBar(msg, 'GET')),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(coreBehaviour: TCoreBehaviour) {
    return this.http
      .delete(`${api}/hr/corebehaviours/${coreBehaviour.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `CoreBehaviour ${coreBehaviour.id} deleted`,
            'DELETE'
          )
        )
      );
  }

  add(coreBehaviour: TCoreBehaviour) {
    return this.http
      .post<TCoreBehaviour>(`${api}/hr/corebehaviours/`, coreBehaviour)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `CoreBehaviour ${coreBehaviour.id} added`,
            'POST'
          )
        )
      );
  }

  update(coreBehaviour: TCoreBehaviour) {
    return this.http
      .put<TCoreBehaviour>(
        `${api}/hr/corebehaviours/${coreBehaviour.id}`,
        coreBehaviour
      )
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `CoreBehaviour ${coreBehaviour.id} updated`,
            'PUT'
          )
        )
      );
  }
}

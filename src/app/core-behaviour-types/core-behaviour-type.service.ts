import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { CoreBehaviourType, ToastService } from '../core';
// import { CoreBehaviourTypesModule } from './coreBehaviourTypes.module';

const api = '/api/hr';

@Injectable({ providedIn: 'root' })
export class CoreBehaviourTypeService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/corebehaviourtypes`;
    const msg = 'CoreBehaviourTypes retrieved successfully!';
    return this.http
      .get<CoreBehaviourType[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(coreBehaviourType: CoreBehaviourType) {
    return this.http
      .delete(`${api}/corebehaviourtypes/${coreBehaviourType.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`CoreBehaviourType ${coreBehaviourType.name} deleted`, 'DELETE')
        )
      );
  }

  add(coreBehaviourType: CoreBehaviourType) {
    return this.http
      .post<CoreBehaviourType>(`${api}/corebehaviourtypes/`, coreBehaviourType)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`CoreBehaviourType ${coreBehaviourType.name} added`, 'POST')
        )
      );
  }

  update(coreBehaviourType: CoreBehaviourType) {
    return this.http
      .put<CoreBehaviourType>(`${api}/corebehaviourtypes/${coreBehaviourType.id}`, coreBehaviourType)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`CoreBehaviourType ${coreBehaviourType.name} updated`, 'PUT')
        )
      );
  }
}

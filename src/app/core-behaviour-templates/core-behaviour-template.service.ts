import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from '@app/core';
import { TCoreBehaviourTemplate } from '@app/core/model/TCoreBehaviourTemplate';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// import { TCoreBehaviourTemplatesModule } from './coreBehaviourTemplates.module';

const api = 'https://localhost:44324/api';

@Injectable({ providedIn: 'root' })
export class CoreBehaviourTemplateService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/hr/corebehaviourtypes`;
    const msg = 'TCoreBehaviourTemplates retrieved successfully!';
    return this.http.get<TCoreBehaviourTemplate[]>(url).pipe(
      tap(() => this.toastService.openSnackBar(msg, 'GET')),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(coreBehaviourTemplate: TCoreBehaviourTemplate) {
    return this.http
      .delete(`${api}/hr/corebehaviourtypes/${coreBehaviourTemplate.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `TCoreBehaviourTemplate ${coreBehaviourTemplate.name} deleted`,
            'DELETE'
          )
        )
      );
  }

  add(coreBehaviourTemplate: TCoreBehaviourTemplate) {
    return this.http
      .post<TCoreBehaviourTemplate>(
        `${api}/hr/corebehaviourtypes/`,
        coreBehaviourTemplate
      )
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `TCoreBehaviourTemplate ${coreBehaviourTemplate.name} added`,
            'POST'
          )
        )
      );
  }

  update(coreBehaviourTemplate: TCoreBehaviourTemplate) {
    return this.http
      .put<TCoreBehaviourTemplate>(
        `${api}/hr/corebehaviourtypes/${coreBehaviourTemplate.id}`,
        coreBehaviourTemplate
      )
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `TCoreBehaviourTemplate ${coreBehaviourTemplate.name} updated`,
            'PUT'
          )
        )
      );
  }
}

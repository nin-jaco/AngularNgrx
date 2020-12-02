import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { CoreBehaviourComment } from '../core';

@Injectable({ providedIn: 'root' })
export class CoreBehaviourCommentService extends EntityCollectionServiceBase<CoreBehaviourComment> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('CoreBehaviourComment', serviceElementsFactory);
  }
}



/*import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ToastService } from '../core';
import { CoreBehaviourComment } from '../core/model/core-behaviour-comment.model';


const api = 'https://localhost:44324/api';

@Injectable({ providedIn: 'root' })
export class CoreBehaviourCommentService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/hr/corebehaviourcomments`;
    const msg = 'CoreBehaviourComments retrieved successfully!';
    return this.http
      .get<CoreBehaviourComment[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(coreBehaviourComment: CoreBehaviourComment) {
    return this.http
      .delete(`${api}/hr/coreBehaviourComments/${coreBehaviourComment.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`CoreBehaviourComment ${coreBehaviourComment.description} deleted`, 'DELETE')
        )
      );
  }

  add(coreBehaviourComment: CoreBehaviourComment) {
    return this.http
      .post<CoreBehaviourComment>(`${api}/hr/coreBehaviourComments/`, coreBehaviourComment)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`CoreBehaviourComment ${coreBehaviourComment.description} added`, 'POST')
        )
      );
  }

  update(coreBehaviourComment: CoreBehaviourComment) {
    return this.http
      .put<CoreBehaviourComment>(`${api}/hr/coreBehaviourComments/${coreBehaviourComment.id}`, coreBehaviourComment)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`CoreBehaviourComment ${coreBehaviourComment.description} updated`, 'PUT')
        )
      );
  }
}*/

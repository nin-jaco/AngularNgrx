import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ToastService } from '../core';
import { TNote } from '../core/model/TNote';
// import { NotesModule } from './notes.module';

const api = 'https://localhost:44324/api';

@Injectable({ providedIn: 'root' })
export class NoteService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/hr/notes`;
    const msg = 'Notes retrieved successfully!';
    return this.http.get<TNote[]>(url).pipe(
      tap(() => this.toastService.openSnackBar(msg, 'GET')),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(note: TNote) {
    return this.http
      .delete(`${api}/hr/notes/${note.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `Note ${note.noteText} deleted`,
            'DELETE'
          )
        )
      );
  }

  add(note: TNote) {
    return this.http
      .post<TNote>(`${api}/hr/notes/`, note)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Note ${note.noteText} added`, 'POST')
        )
      );
  }

  update(note: TNote) {
    return this.http
      .put<TNote>(`${api}/hr/notes/${note.id}`, note)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Note ${note.noteText} updated`, 'PUT')
        )
      );
  }
}

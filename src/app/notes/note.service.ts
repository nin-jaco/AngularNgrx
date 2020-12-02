import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Note, ToastService } from '../core';
// import { NotesModule } from './notes.module';

const api = '/api';

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
    return this.http
      .get<Note[]>(url)
      .pipe(
        tap(() => this.toastService.openSnackBar(msg, 'GET')),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(note: Note) {
    return this.http
      .delete(`${api}/hr/notes/${note.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Note ${note.noteText} deleted`, 'DELETE')
        )
      );
  }

  add(note: Note) {
    return this.http
      .post<Note>(`${api}/hr/notes/`, note)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Note ${note.noteText} added`, 'POST')
        )
      );
  }

  update(note: Note) {
    return this.http
      .put<Note>(`${api}/hr/notes/${note.id}`, note)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Note ${note.noteText} updated`, 'PUT')
        )
      );
  }
}

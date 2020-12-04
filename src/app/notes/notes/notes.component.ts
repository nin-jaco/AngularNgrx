import { Component, OnInit } from '@angular/core';
import { TNote } from '@app/core/model/TNote';
import { finalize } from 'rxjs/operators';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  selected: TNote;
  notes: TNote[];
  loading: boolean;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.getNotes();
  }

  add(note: TNote) {
    this.loading = true;
    this.noteService
      .add(note)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedNote => (this.notes = this.notes.concat(addedNote)));
  }

  close() {
    this.selected = null;
  }

  delete(note: TNote) {
    this.loading = true;
    this.close();
    this.noteService
      .delete(note)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(() => (this.notes = this.notes.filter(h => h.id !== note.id)));
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getNotes() {
    this.loading = true;
    this.noteService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(notes => (this.notes = notes));
    this.close();
  }

  select(note: TNote) {
    this.selected = note;
  }

  update(note: TNote) {
    this.loading = true;
    this.noteService
      .update(note)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.notes = this.notes.map(h => (h.id === note.id ? note : h)))
      );
  }
}

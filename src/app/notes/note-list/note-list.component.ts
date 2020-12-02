import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Note, ModalComponent } from '../../core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteListComponent {
  @Input() notes: Note[];
  @Input() selectedNote: Note;
  @Output() deleted = new EventEmitter<Note>();
  @Output() selected = new EventEmitter<Note>();

  constructor(public dialog: MatDialog) {}

  byId(note: Note) {
    return note.id;
  }

  select(note: Note) {
    this.selected.emit(note);
  }

  deleteNote(note: Note) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete Note',
      message: `Do you want to delete ${note.noteText}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(note);
      }
    });
  }
}

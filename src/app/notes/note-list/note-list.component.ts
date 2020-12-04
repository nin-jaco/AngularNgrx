import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '@app/core';
import { TNote } from '@app/core/model/TNote';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteListComponent {
  @Input() notes: TNote[];
  @Input() selectedNote: TNote;
  @Output() deleted = new EventEmitter<TNote>();
  @Output() selected = new EventEmitter<TNote>();

  constructor(public dialog: MatDialog) {}

  byId(note: TNote) {
    return note.id;
  }

  select(note: TNote) {
    this.selected.emit(note);
  }

  deleteNote(note: TNote) {
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

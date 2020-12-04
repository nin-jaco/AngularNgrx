import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '@app/core';
import { TComment } from '@app/core/model/TComment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent {
  @Input() comments: TComment[];
  @Input() selectedComment: TComment;
  @Output() deleted = new EventEmitter<TComment>();
  @Output() selected = new EventEmitter<TComment>();

  constructor(public dialog: MatDialog) {}

  byId(comment: TComment) {
    return comment.id;
  }

  select(comment: TComment) {
    this.selected.emit(comment);
  }

  deleteComment(comment: TComment) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete Comment',
      message: `Do you want to delete ${comment.description}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(comment);
      }
    });
  }
}

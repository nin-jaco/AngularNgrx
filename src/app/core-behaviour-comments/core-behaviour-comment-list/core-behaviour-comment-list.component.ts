import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CoreBehaviourComment } from 'src/app/core/model/core-behaviour-comment.model';
import { ModalComponent } from '../../core';

@Component({
  selector: 'app-Core-Behaviour-Comment-list',
  templateUrl: './Core-Behaviour-Comment-list.component.html',
  styleUrls: ['./Core-Behaviour-Comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreBehaviourCommentListComponent {
  @Input() corebehaviourcomments: CoreBehaviourComment[];
  @Input() selectedCoreBehaviourComment: CoreBehaviourComment;
  @Output() deleted = new EventEmitter<CoreBehaviourComment>();
  @Output() selected = new EventEmitter<CoreBehaviourComment>();

  constructor(public dialog: MatDialog) {}

  byId(coreBehaviourComment: CoreBehaviourComment) {
    return coreBehaviourComment.id;
  }

  select(coreBehaviourComment: CoreBehaviourComment) {
    this.selected.emit(coreBehaviourComment);
  }

  deleteCoreBehaviourComment(coreBehaviourComment: CoreBehaviourComment) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete Comment',
      message: `Do you want to delete ${coreBehaviourComment.description}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(coreBehaviourComment);
      }
    });
  }
}

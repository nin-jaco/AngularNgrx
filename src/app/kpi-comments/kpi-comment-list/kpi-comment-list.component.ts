import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { KpiComment, ModalComponent } from '../../core';

@Component({
  selector: 'app-kpiComment-list',
  templateUrl: './kpi-comment-list.component.html',
  styleUrls: ['./kpi-comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KpiCommentListComponent {
  @Input() kpiComments: KpiComment[];
  @Input() selectedKpiComment: KpiComment;
  @Output() deleted = new EventEmitter<KpiComment>();
  @Output() selected = new EventEmitter<KpiComment>();

  constructor(public dialog: MatDialog) {}

  byId(kpiComment: KpiComment) {
    return kpiComment.id;
  }

  select(kpiComment: KpiComment) {
    this.selected.emit(kpiComment);
  }

  deleteKpiComment(kpiComment: KpiComment) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete KpiComment',
      message: `Do you want to delete ${kpiComment.description}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(kpiComment);
      }
    });
  }
}

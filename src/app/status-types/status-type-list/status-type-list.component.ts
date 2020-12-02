import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StatusType, ModalComponent } from '../../core';

@Component({
  selector: 'app-status-type-list',
  templateUrl: './status-type-list.component.html',
  styleUrls: ['./status-type-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusTypeListComponent {
  @Input() statusTypes: StatusType[];
  @Input() selectedStatusType: StatusType;
  @Output() deleted = new EventEmitter<StatusType>();
  @Output() selected = new EventEmitter<StatusType>();

  constructor(public dialog: MatDialog) {}

  byId(statusType: StatusType) {
    return statusType.id;
  }

  select(statusType: StatusType) {
    this.selected.emit(statusType);
  }

  deleteStatusType(statusType: StatusType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete StatusType',
      message: `Do you want to delete ${statusType.description}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(statusType);
      }
    });
  }
}

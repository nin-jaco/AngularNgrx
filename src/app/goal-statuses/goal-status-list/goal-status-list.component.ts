import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '@app/core';
import { TGoalStatus } from '@app/core/model/TGoalStatus';

@Component({
  selector: 'app-goal-status-list',
  templateUrl: './goal-status-list.component.html',
  styleUrls: ['./goal-status-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalStatusListComponent {
  @Input() goalStatuses: TGoalStatus[];
  @Input() selectedGoalStatus: TGoalStatus;
  @Output() deleted = new EventEmitter<TGoalStatus>();
  @Output() selected = new EventEmitter<TGoalStatus>();

  constructor(public dialog: MatDialog) {}

  byId(goalStatus: TGoalStatus) {
    return goalStatus.id;
  }

  select(goalStatus: TGoalStatus) {
    this.selected.emit(goalStatus);
  }

  deleteGoalStatus(goalStatus: TGoalStatus) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete GoalStatus',
      message: `Do you want to delete ${goalStatus.description}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(goalStatus);
      }
    });
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GoalStatus, ModalComponent } from '../../core';

@Component({
  selector: 'app-goal-status-list',
  templateUrl: './goal-status-list.component.html',
  styleUrls: ['./goal-status-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalStatusListComponent {
  @Input() goalStatuses: GoalStatus[];
  @Input() selectedGoalStatus: GoalStatus;
  @Output() deleted = new EventEmitter<GoalStatus>();
  @Output() selected = new EventEmitter<GoalStatus>();

  constructor(public dialog: MatDialog) {}

  byId(goalStatus: GoalStatus) {
    return goalStatus.id;
  }

  select(goalStatus: GoalStatus) {
    this.selected.emit(goalStatus);
  }

  deleteGoalStatus(goalStatus: GoalStatus) {
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

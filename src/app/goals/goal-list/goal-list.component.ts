import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Goal, ModalComponent } from '../../core';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalListComponent {
  @Input() goals: Goal[];
  @Input() selectedGoal: Goal;
  @Output() deleted = new EventEmitter<Goal>();
  @Output() selected = new EventEmitter<Goal>();

  constructor(public dialog: MatDialog) {}

  byId(goal: Goal) {
    return goal.id;
  }

  select(goal: Goal) {
    this.selected.emit(goal);
  }

  deleteGoal(goal: Goal) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete Goal',
      message: `Do you want to delete ${goal.id}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(goal);
      }
    });
  }
}

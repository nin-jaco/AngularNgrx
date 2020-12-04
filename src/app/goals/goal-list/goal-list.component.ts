import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TGoal } from '@app/core/model/TGoal';
import { ModalComponent } from '../../core';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalListComponent {
  @Input() goals: TGoal[];
  @Input() selectedGoal: TGoal;
  @Output() deleted = new EventEmitter<TGoal>();
  @Output() selected = new EventEmitter<TGoal>();

  constructor(public dialog: MatDialog) {}

  byId(goal: TGoal) {
    return goal.name;
  }

  select(goal: TGoal) {
    this.selected.emit(goal);
  }

  deleteGoal(goal: TGoal) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete Goal',
      message: `Do you want to delete ${goal.name}`
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

import { Component, OnInit } from '@angular/core';
import { TGoalStatus } from '@app/core/model/TGoalStatus';
import { finalize } from 'rxjs/operators';
import { GoalStatusService } from '../goal-status.service';

@Component({
  selector: 'app-goal-statuses',
  templateUrl: './goal-statuses.component.html',
  styleUrls: ['./goal-statuses.component.scss']
})
export class GoalStatusesComponent implements OnInit {
  selected: TGoalStatus;
  goalStatuses: TGoalStatus[];
  loading: boolean;

  constructor(private goalStatusService: GoalStatusService) {}

  ngOnInit() {
    this.getGoalStatuses();
  }

  add(goalStatus: TGoalStatus) {
    this.loading = true;
    this.goalStatusService
      .add(goalStatus)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        addedGoalStatus =>
          (this.goalStatuses = this.goalStatuses.concat(addedGoalStatus))
      );
  }

  close() {
    this.selected = null;
  }

  delete(goalStatus: TGoalStatus) {
    this.loading = true;
    this.close();
    this.goalStatusService
      .delete(goalStatus)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.goalStatuses = this.goalStatuses.filter(
            h => h.id !== goalStatus.id
          ))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getGoalStatuses() {
    this.loading = true;
    this.goalStatusService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(goalStatuses => (this.goalStatuses = goalStatuses));
    this.close();
  }

  select(goalStatus: TGoalStatus) {
    this.selected = goalStatus;
  }

  update(goalStatus: TGoalStatus) {
    this.loading = true;
    this.goalStatusService
      .update(goalStatus)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.goalStatuses = this.goalStatuses.map(h =>
            h.id === goalStatus.id ? goalStatus : h
          ))
      );
  }
}

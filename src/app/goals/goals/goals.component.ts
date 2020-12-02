import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Goal } from '../../core';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  selected: Goal;
  goals: Goal[];
  loading: boolean;

  constructor(private goalService: GoalService) {}

  ngOnInit() {
    this.getGoals();
  }

  add(goal: Goal) {
    this.loading = true;
    this.goalService
      .add(goal)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedGoal => (this.goals = this.goals.concat(addedGoal)));
  }

  close() {
    this.selected = null;
  }

  delete(goal: Goal) {
    this.loading = true;
    this.close();
    this.goalService
      .delete(goal)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.goals = this.goals.filter(h => h.id !== goal.id))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getGoals() {
    this.loading = true;
    this.goalService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(goals => (this.goals = goals));
    this.close();
  }

  select(goal: Goal) {
    this.selected = goal;
  }

  update(goal: Goal) {
    this.loading = true;
    this.goalService
      .update(goal)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.goals = this.goals.map(h => (h.id === goal.id ? goal : h)))
      );
  }
}

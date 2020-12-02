import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Period } from '../../core';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss']
})
export class PeriodsComponent implements OnInit {
  selected: Period;
  periods: Period[];
  loading: boolean;

  constructor(private periodService: PeriodService) {}

  ngOnInit() {
    this.getPeriods();
  }

  add(period: Period) {
    this.loading = true;
    this.periodService
      .add(period)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedPeriod => (this.periods = this.periods.concat(addedPeriod)));
  }

  close() {
    this.selected = null;
  }

  delete(period: Period) {
    this.loading = true;
    this.close();
    this.periodService
      .delete(period)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.periods = this.periods.filter(h => h.id !== period.id))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getPeriods() {
    this.loading = true;
    this.periodService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(periods => (this.periods = periods));
    this.close();
  }

  select(period: Period) {
    this.selected = period;
  }

  update(period: Period) {
    this.loading = true;
    this.periodService
      .update(period)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.periods = this.periods.map(h => (h.id === period.id ? period : h)))
      );
  }
}

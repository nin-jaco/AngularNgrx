import { Component, OnInit } from '@angular/core';
import { TKpi } from '@app/core/model/TKpi';
import { finalize } from 'rxjs/operators';
import { KpiService } from '../kpi.service';

@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',
  styleUrls: ['./kpis.component.scss']
})
export class KpisComponent implements OnInit {
  selected: TKpi;
  kpis: TKpi[];
  loading: boolean;

  constructor(private kpiService: KpiService) {}

  ngOnInit() {
    this.getKpis();
  }

  add(kpi: TKpi) {
    this.loading = true;
    this.kpiService
      .add(kpi)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedKpi => (this.kpis = this.kpis.concat(addedKpi)));
  }

  close() {
    this.selected = null;
  }

  delete(kpi: TKpi) {
    this.loading = true;
    this.close();
    this.kpiService
      .delete(kpi)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(() => (this.kpis = this.kpis.filter(h => h.id !== kpi.id)));
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getKpis() {
    this.loading = true;
    this.kpiService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(kpis => (this.kpis = kpis));
    this.close();
  }

  select(kpi: TKpi) {
    this.selected = kpi;
  }

  update(kpi: TKpi) {
    this.loading = true;
    this.kpiService
      .update(kpi)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.kpis = this.kpis.map(h => (h.id === kpi.id ? kpi : h)))
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { QuarterType } from '../../core';
import { QuarterTypeService } from '../quarter-type.service';

@Component({
  selector: 'app-quarter-types',
  templateUrl: './quarter-types.component.html',
  styleUrls: ['./quarter-types.component.scss']
})
export class QuarterTypeComponent implements OnInit {
  selected: QuarterType;
  quarterTypes: QuarterType[];
  loading: boolean;

  constructor(private quarterTypeService: QuarterTypeService) {}

  ngOnInit() {
    this.getQuarterTypes();
  }

  add(quarterType: QuarterType) {
    this.loading = true;
    this.quarterTypeService
      .add(quarterType)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedQuarterType => (this.quarterTypes = this.quarterTypes.concat(addedQuarterType)));
  }

  close() {
    this.selected = null;
  }

  delete(quarterType: QuarterType) {
    this.loading = true;
    this.close();
    this.quarterTypeService
      .delete(quarterType)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.quarterTypes = this.quarterTypes.filter(h => h.id !== quarterType.id))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getQuarterTypes() {
    this.loading = true;
    this.quarterTypeService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(quarterTypes => (this.quarterTypes = quarterTypes));
    this.close();
  }

  select(quarterType: QuarterType) {
    this.selected = quarterType;
  }

  update(quarterType: QuarterType) {
    this.loading = true;
    this.quarterTypeService
      .update(quarterType)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.quarterTypes = this.quarterTypes.map(h => (h.id === quarterType.id ? quarterType : h)))
      );
  }
}

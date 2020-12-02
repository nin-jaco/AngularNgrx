import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { StatusType } from '../../core';
import { StatusTypeService } from '../status-type.service';

@Component({
  selector: 'app-status-types',
  templateUrl: './status-types.component.html',
  styleUrls: ['./status-types.component.scss']
})
export class StatusTypesComponent implements OnInit {
  selected: StatusType;
  statusTypes: StatusType[];
  loading: boolean;

  constructor(private statusTypeService: StatusTypeService) {}

  ngOnInit() {
    this.getStatusTypes();
  }

  add(statusType: StatusType) {
    this.loading = true;
    this.statusTypeService
      .add(statusType)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedStatusType => (this.statusTypes = this.statusTypes.concat(addedStatusType)));
  }

  close() {
    this.selected = null;
  }

  delete(statusType: StatusType) {
    this.loading = true;
    this.close();
    this.statusTypeService
      .delete(statusType)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.statusTypes = this.statusTypes.filter(h => h.id !== statusType.id))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getStatusTypes() {
    this.loading = true;
    this.statusTypeService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(statusTypes => (this.statusTypes = statusTypes));
    this.close();
  }

  select(statusType: StatusType) {
    this.selected = statusType;
  }

  update(statusType: StatusType) {
    this.loading = true;
    this.statusTypeService
      .update(statusType)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.statusTypes = this.statusTypes.map(h => (h.id === statusType.id ? statusType : h)))
      );
  }
}

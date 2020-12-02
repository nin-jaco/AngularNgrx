import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Period, ModalComponent } from '../../core';

@Component({
  selector: 'app-period-list',
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeriodListComponent {
  @Input() periods: Period[];
  @Input() selectedPeriod: Period;
  @Output() deleted = new EventEmitter<Period>();
  @Output() selected = new EventEmitter<Period>();

  constructor(public dialog: MatDialog) {}

  byId(period: Period) {
    return period.id;
  }

  select(period: Period) {
    this.selected.emit(period);
  }

  deletePeriod(period: Period) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete Period',
      message: `Do you want to delete ${period.name}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(period);
      }
    });
  }
}

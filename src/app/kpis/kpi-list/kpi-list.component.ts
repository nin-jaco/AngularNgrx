import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Kpi, ModalComponent } from '../../core';

@Component({
  selector: 'app-kpi-list',
  templateUrl: './kpi-list.component.html',
  styleUrls: ['./kpi-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KpiListComponent {
  @Input() kpis: Kpi[];
  @Input() selectedKpi: Kpi;
  @Output() deleted = new EventEmitter<Kpi>();
  @Output() selected = new EventEmitter<Kpi>();

  constructor(public dialog: MatDialog) {}

  byId(kpi: Kpi) {
    return kpi.id;
  }

  select(kpi: Kpi) {
    this.selected.emit(kpi);
  }

  deleteKpi(kpi: Kpi) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete Kpi',
      message: `Do you want to delete ${kpi.id}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(kpi);
      }
    });
  }
}

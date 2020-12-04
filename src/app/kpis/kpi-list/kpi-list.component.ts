import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '@app/core';
import { TKpi } from '@app/core/model/TKpi';

@Component({
  selector: 'app-kpi-list',
  templateUrl: './kpi-list.component.html',
  styleUrls: ['./kpi-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KpiListComponent {
  @Input() kpis: TKpi[];
  @Input() selectedKpi: TKpi;
  @Output() deleted = new EventEmitter<TKpi>();
  @Output() selected = new EventEmitter<TKpi>();

  constructor(public dialog: MatDialog) {}

  byId(kpi: TKpi) {
    return kpi.id;
  }

  select(kpi: TKpi) {
    this.selected.emit(kpi);
  }

  deleteKpi(kpi: TKpi) {
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

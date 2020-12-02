import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuarterType, ModalComponent } from '../../core';

@Component({
  selector: 'app-quarter-type-list',
  templateUrl: './quarter-type-list.component.html',
  styleUrls: ['./quarter-type-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuarterTypeListComponent {
  @Input() quarterTypes: QuarterType[];
  @Input() selectedQuarterType: QuarterType;
  @Output() deleted = new EventEmitter<QuarterType>();
  @Output() selected = new EventEmitter<QuarterType>();

  constructor(public dialog: MatDialog) {}

  byId(quarterType: QuarterType) {
    return quarterType.id;
  }

  select(quarterType: QuarterType) {
    this.selected.emit(quarterType);
  }

  deleteQuarterType(quarterType: QuarterType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete QuarterType',
      message: `Do you want to delete ${quarterType.description}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(quarterType);
      }
    });
  }
}

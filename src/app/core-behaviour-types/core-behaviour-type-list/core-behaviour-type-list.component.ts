import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CoreBehaviourType, ModalComponent } from '../../core';

@Component({
  selector: 'app-core-behaviour-type-list',
  templateUrl: './core-behaviour-type-list.component.html',
  styleUrls: ['./core-behaviour-type-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreBehaviourTypeListComponent {
  @Input() coreBehaviourTypes: CoreBehaviourType[];
  @Input() selectedCoreBehaviourType: CoreBehaviourType;
  @Output() deleted = new EventEmitter<CoreBehaviourType>();
  @Output() selected = new EventEmitter<CoreBehaviourType>();

  constructor(public dialog: MatDialog) {}

  byId(coreBehaviourType: CoreBehaviourType) {
    return coreBehaviourType.id;
  }

  select(coreBehaviourType: CoreBehaviourType) {
    this.selected.emit(coreBehaviourType);
  }

  deleteCoreBehaviourType(coreBehaviourType: CoreBehaviourType) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete CoreBehaviourType',
      message: `Do you want to delete ${coreBehaviourType.name}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(coreBehaviourType);
      }
    });
  }
}

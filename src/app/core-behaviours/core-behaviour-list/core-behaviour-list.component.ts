import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CoreBehaviour, ModalComponent } from '../../core';

@Component({
  selector: 'app-core-behaviour-list',
  templateUrl: './core-behaviour-list.component.html',
  styleUrls: ['./core-behaviour-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreBehaviourListComponent {
  @Input() coreBehaviours: CoreBehaviour[];
  @Input() selectedCoreBehaviour: CoreBehaviour;
  @Output() deleted = new EventEmitter<CoreBehaviour>();
  @Output() selected = new EventEmitter<CoreBehaviour>();

  constructor(public dialog: MatDialog) {}

  byId(coreBehaviour: CoreBehaviour) {
    return coreBehaviour.id;
  }

  select(coreBehaviour: CoreBehaviour) {
    this.selected.emit(coreBehaviour);
  }

  deleteCoreBehaviour(coreBehaviour: CoreBehaviour) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete CoreBehaviour',
      message: `Do you want to delete ${coreBehaviour.id}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(coreBehaviour);
      }
    });
  }
}

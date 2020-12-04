import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '@app/core';
import { TCoreBehaviour } from '@app/core/model/TCoreBehaviour';

@Component({
  selector: 'app-core-behaviour-list',
  templateUrl: './core-behaviour-list.component.html',
  styleUrls: ['./core-behaviour-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreBehaviourListComponent {
  @Input() coreBehaviours: TCoreBehaviour[];
  @Input() selectedCoreBehaviour: TCoreBehaviour;
  @Output() deleted = new EventEmitter<TCoreBehaviour>();
  @Output() selected = new EventEmitter<TCoreBehaviour>();

  constructor(public dialog: MatDialog) {}

  byId(coreBehaviour: TCoreBehaviour) {
    return coreBehaviour.id;
  }

  select(coreBehaviour: TCoreBehaviour) {
    this.selected.emit(coreBehaviour);
  }

  deleteCoreBehaviour(coreBehaviour: TCoreBehaviour) {
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

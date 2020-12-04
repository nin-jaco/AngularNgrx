import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '@app/core';
import { TCoreBehaviourTemplate } from '@app/core/model/TCoreBehaviourTemplate';

@Component({
  selector: 'app-core-behaviour-template-list',
  templateUrl: './core-behaviour-template-list.component.html',
  styleUrls: ['./core-behaviour-template-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreBehaviourTemplateListComponent {
  @Input() coreBehaviourTypes: TCoreBehaviourTemplate[];
  @Input() selectedTCoreBehaviourTemplate: TCoreBehaviourTemplate;
  @Output() deleted = new EventEmitter<TCoreBehaviourTemplate>();
  @Output() selected = new EventEmitter<TCoreBehaviourTemplate>();

  constructor(public dialog: MatDialog) {}

  byId(coreBehaviourType: TCoreBehaviourTemplate) {
    return coreBehaviourType.id;
  }

  select(coreBehaviourType: TCoreBehaviourTemplate) {
    this.selected.emit(coreBehaviourType);
  }

  deleteTCoreBehaviourTemplate(coreBehaviourType: TCoreBehaviourTemplate) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete TCoreBehaviourTemplate',
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

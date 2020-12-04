import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '@app/core';
import { TSetting } from '@app/core/model/TSetting';

@Component({
  selector: 'app-setting-list',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingListComponent {
  @Input() settings: TSetting[];
  @Input() selectedSetting: TSetting;
  @Output() deleted = new EventEmitter<TSetting>();
  @Output() selected = new EventEmitter<TSetting>();

  constructor(public dialog: MatDialog) {}

  byId(setting: TSetting) {
    return setting.id;
  }

  select(setting: TSetting) {
    this.selected.emit(setting);
  }

  deleteSetting(setting: TSetting) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete Setting',
      message: `Do you want to delete ${setting.settingName}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(setting);
      }
    });
  }
}

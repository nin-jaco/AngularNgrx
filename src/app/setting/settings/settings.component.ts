import { Component, OnInit } from '@angular/core';
import { TSetting } from '@app/core/model/TSetting';
import { finalize } from 'rxjs/operators';
import { SettingService } from '../setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  selected: TSetting;
  settings: TSetting[];
  loading: boolean;

  constructor(private settingService: SettingService) {}

  ngOnInit() {
    this.getSettings();
  }

  add(setting: TSetting) {
    this.loading = true;
    this.settingService
      .add(setting)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        addedSetting => (this.settings = this.settings.concat(addedSetting))
      );
  }

  close() {
    this.selected = null;
  }

  delete(setting: TSetting) {
    this.loading = true;
    this.close();
    this.settingService
      .delete(setting)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.settings = this.settings.filter(h => h.id !== setting.id))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getSettings() {
    this.loading = true;
    this.settingService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(settings => (this.settings = settings));
    this.close();
  }

  select(setting: TSetting) {
    this.selected = setting;
  }

  update(setting: TSetting) {
    this.loading = true;
    this.settingService
      .update(setting)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.settings = this.settings.map(h =>
            h.id === setting.id ? setting : h
          ))
      );
  }
}

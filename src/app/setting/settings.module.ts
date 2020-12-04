import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { SettingDetailComponent } from './setting-detail/setting-detail.component';
import { SettingListComponent } from './setting-list/setting-list.component';
import { SettingService } from './setting.service';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SettingsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [SettingsComponent, SettingDetailComponent],
  declarations: [
    SettingsComponent,
    SettingDetailComponent,
    SettingListComponent
  ],
  providers: [SettingService]
})
export class SettingsModule {}

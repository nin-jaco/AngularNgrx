import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { PeriodDetailComponent } from './period-detail/period-detail.component';
import { PeriodListComponent } from './period-list/period-list.component';
import { PeriodService } from './period.service';
import { PeriodsComponent } from './periods/periods.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PeriodsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [PeriodsComponent, PeriodDetailComponent],
  declarations: [PeriodsComponent, PeriodDetailComponent, PeriodListComponent],
  providers: [PeriodService]
})
export class PeriodsModule {}

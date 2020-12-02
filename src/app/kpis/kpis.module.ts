import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { KpiDetailComponent } from './kpi-detail/kpi-detail.component';
import { KpiListComponent } from './kpi-list/kpi-list.component';
import { KpiService } from './kpi.service';
import { KpisComponent } from './kpis/kpis.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: KpisComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [KpisComponent, KpiDetailComponent],
  declarations: [KpisComponent, KpiDetailComponent, KpiListComponent],
  providers: [KpiService]
})
export class KpisModule {}

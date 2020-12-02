import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { StatusTypeDetailComponent } from './status-type-detail/status-type-detail.component';
import { StatusTypeListComponent } from './status-type-list/status-type-list.component';
import { StatusTypeService } from './status-type.service';
import { StatusTypesComponent } from './status-types/status-types.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StatusTypesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [StatusTypesComponent, StatusTypeDetailComponent],
  declarations: [StatusTypesComponent, StatusTypeDetailComponent, StatusTypeListComponent],
  providers: [StatusTypeService]
})
export class StatusTypesModule {}

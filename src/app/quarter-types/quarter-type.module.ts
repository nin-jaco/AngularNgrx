import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { QuarterTypeDetailComponent } from './quarter-type-detail/quarter-type-detail.component';
import { QuarterTypeListComponent } from './quarter-type-list/quarter-type-list.component';
import { QuarterTypeService } from './quarter-type.service';
import { QuarterTypeComponent } from './quarter-types/quarter-types.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: QuarterTypeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [QuarterTypeComponent, QuarterTypeDetailComponent],
  declarations: [QuarterTypeComponent, QuarterTypeDetailComponent, QuarterTypeListComponent],
  providers: [QuarterTypeService]
})
export class QuarterTypesModule {}

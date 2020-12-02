import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { GoalStatusDetailComponent } from './goal-status-detail/goal-status-detail.component';
import { GoalStatusListComponent } from './goal-status-list/goal-status-list.component';
import { GoalStatusService } from './goal-status.service';
import { GoalStatusesComponent } from './goal-statuses/goal-statuses.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: GoalStatusesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [GoalStatusesComponent, GoalStatusDetailComponent],
  declarations: [GoalStatusesComponent, GoalStatusDetailComponent, GoalStatusListComponent],
  providers: [GoalStatusService]
})
export class GoalStatusesModule {}

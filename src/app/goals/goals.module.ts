import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalService } from './goal.service';
import { GoalsComponent } from './goals/goals.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: GoalsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [GoalsComponent, GoalDetailComponent],
  declarations: [GoalsComponent, GoalDetailComponent, GoalListComponent],
  providers: [GoalService]
})
export class GoalsModule {}

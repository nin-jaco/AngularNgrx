import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CoreBehaviourDetailComponent } from './core-behaviour-detail/core-behaviour-detail.component';
import { CoreBehaviourListComponent } from './core-behaviour-list/core-behaviour-list.component';
import { CoreBehaviourService } from './core-behaviour.service';
import { CoreBehavioursComponent } from './core-behaviours/core-behaviours.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CoreBehavioursComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [CoreBehavioursComponent, CoreBehaviourDetailComponent],
  declarations: [CoreBehavioursComponent, CoreBehaviourDetailComponent, CoreBehaviourListComponent],
  providers: [CoreBehaviourService]
})
export class CoreBehavioursModule {}

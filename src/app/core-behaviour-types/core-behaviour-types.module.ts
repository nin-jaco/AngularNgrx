import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CoreBehaviourTypeDetailComponent } from './core-behaviour-type-detail/core-behaviour-type-detail.component';
import { CoreBehaviourTypeListComponent } from './core-behaviour-type-list/core-behaviour-type-list.component';
import { CoreBehaviourTypeService } from './core-behaviour-type.service';
import { CoreBehaviourTypesComponent } from './core-behaviour-types/core-behaviour-types.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CoreBehaviourTypesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [CoreBehaviourTypesComponent, CoreBehaviourTypeDetailComponent],
  declarations: [CoreBehaviourTypesComponent, CoreBehaviourTypeDetailComponent, CoreBehaviourTypeListComponent],
  providers: [CoreBehaviourTypeService]
})
export class CoreBehaviourTypesModule {}

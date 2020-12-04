import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CoreBehaviourTemplateDetailComponent } from './core-behaviour-template-detail/core-behaviour-template-detail.component';
import { CoreBehaviourTemplateListComponent } from './core-behaviour-template-list/core-behaviour-template-list.component';
import { CoreBehaviourTemplateService } from './core-behaviour-template.service';
import { CoreBehaviourTemplatesComponent } from './core-behaviour-templates/core-behaviour-templates.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CoreBehaviourTemplatesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CoreBehaviourTemplatesComponent,
    CoreBehaviourTemplateDetailComponent
  ],
  declarations: [
    CoreBehaviourTemplatesComponent,
    CoreBehaviourTemplateDetailComponent,
    CoreBehaviourTemplateListComponent
  ],
  providers: [CoreBehaviourTemplateService]
})
export class CoreBehaviourTemplatesModule {}

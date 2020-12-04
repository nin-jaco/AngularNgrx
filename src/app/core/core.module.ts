import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { throwIfAlreadyLoaded } from './module-import-check';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { TComment } from './model/TComment';
import { TCoreBehaviour } from './model/TCoreBehaviour';
import { TCoreBehaviourTemplate } from './model/TCoreBehaviourTemplate';
import { TFileUpload } from './model/TFileUpload';
import { TGoalStatus } from './model/TGoalStatus';
import { TKpi } from './model/TKpi';
import { TNote } from './model/TNote';
import { TPermission } from './model/TPermission';
import { TRating } from './model/TRating';
import { TRole } from './model/TRole';
import { TRolePermission } from './model/TRolePermission';
import { TSetting } from './model/TSetting';
import { TTenantItem } from './model/TTenantItem';
import { TUser } from './model/TUser';
import { TUserAuth } from './model/TUserAuth';
import { TGoal } from './model/TGoal';
import { TUserRole } from './model/TUserRole';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    ModalComponent,
    TGoal,
    TComment,
    TCoreBehaviour,
    TCoreBehaviourTemplate,
    TFileUpload,
    TGoal,
    TGoalStatus,
    TKpi,
    TNote,
    TPermission,
    TRating,
    TRole,
    TRolePermission,
    TSetting,
    TTenantItem,
    TUser,
    TUserAuth,
    TUserRole
  ],
  declarations: [ModalComponent, ToolbarComponent],
  exports: [
    ToolbarComponent,
    TGoal,
    ModalComponent,
    TComment,
    TCoreBehaviour,
    TCoreBehaviourTemplate,
    TFileUpload,
    TGoal,
    TGoalStatus,
    TKpi,
    TNote,
    TPermission,
    TRating,
    TRole,
    TRolePermission,
    TSetting,
    TTenantItem,
    TUser,
    TUserAuth,
    TUserRole
  ],
  entryComponents: [ModalComponent]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

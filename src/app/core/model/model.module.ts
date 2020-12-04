import { NgModule } from '@angular/core';

import { TComment } from './TComment';
import { TCoreBehaviour } from './TCoreBehaviour';
import { TCoreBehaviourTemplate } from './TCoreBehaviourTemplate';
import { TFileUpload } from './TFileUpload';
import { TGoal } from './TGoal';
import { TGoalStatus } from './TGoalStatus';
import { TKpi } from './TKpi';
import { TNote } from './TNote';
import { TPermission } from './TPermission';
import { TRating } from './TRating';
import { TRole } from './TRole';
import { TRolePermission } from './TRolePermission';
import { TSetting } from './TSetting';
import { TTenantItem } from './TTenantItem';
import { TUser } from './TUser';
import { TUserAuth } from './TUserAuth';
import { TUserRole } from './TUserRole';

@NgModule({
  imports: [
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
  exports: [
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
  declarations: []
})
export class ModelModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CoreBehaviourCommentDetailComponent } from './core-behaviour-comment-detail/core-behaviour-comment-detail.component';
import { CoreBehaviourCommentListComponent } from './core-behaviour-comment-list/core-behaviour-comment-list.component';
import { CoreBehaviourCommentService } from './core-behaviour-comment.service';
import { CoreBehaviourCommentsComponent } from './core-behaviour-comments/core-behaviour-comments.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CoreBehaviourCommentsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [CoreBehaviourCommentsComponent, CoreBehaviourCommentDetailComponent],
  declarations: [CoreBehaviourCommentsComponent, CoreBehaviourCommentDetailComponent, CoreBehaviourCommentListComponent],
  providers: [CoreBehaviourCommentService]
})
export class CoreBehaviourCommentsModule {}

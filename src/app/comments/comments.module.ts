import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentService } from './comment.service';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CommentsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [CommentsComponent, CommentDetailComponent],
  declarations: [
    CommentsComponent,
    CommentDetailComponent,
    CommentListComponent
  ],
  providers: [CommentService]
})
export class CoreBehaviourCommentsModule {}

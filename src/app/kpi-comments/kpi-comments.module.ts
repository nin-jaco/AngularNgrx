import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { KpiCommentDetailComponent } from './kpi-comment-detail/kpi-comment-detail.component';
import { KpiCommentListComponent } from './kpi-comment-list/kpi-comment-list.component';
import { KpiCommentService } from './kpi-comment.service';
import { KpiCommentsComponent } from './kpi-comments/kpi-comments.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: KpiCommentsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [KpiCommentsComponent, KpiCommentDetailComponent],
  declarations: [KpiCommentsComponent, KpiCommentDetailComponent, KpiCommentListComponent],
  providers: [KpiCommentService]
})
export class KpiCommentsModule {}

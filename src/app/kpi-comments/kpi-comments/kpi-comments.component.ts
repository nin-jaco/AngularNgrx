import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { KpiComment } from '../../core';
import { KpiCommentService } from '../kpi-comment.service';

@Component({
  selector: 'app-kpi-comments',
  templateUrl: './kpi-comments.component.html',
  styleUrls: ['./kpi-comments.component.scss']
})
export class KpiCommentsComponent implements OnInit {
  selected: KpiComment;
  kpiComments: KpiComment[];
  loading: boolean;

  constructor(private kpiCommentService: KpiCommentService) {}

  ngOnInit() {
    this.getKpiComments();
  }

  add(kpiComment: KpiComment) {
    this.loading = true;
    this.kpiCommentService
      .add(kpiComment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedKpiComment => (this.kpiComments = this.kpiComments.concat(addedKpiComment)));
  }

  close() {
    this.selected = null;
  }

  delete(kpiComment: KpiComment) {
    this.loading = true;
    this.close();
    this.kpiCommentService
      .delete(kpiComment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.kpiComments = this.kpiComments.filter(h => h.id !== kpiComment.id))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getKpiComments() {
    this.loading = true;
    this.kpiCommentService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(kpiComments => (this.kpiComments = kpiComments));
    this.close();
  }

  select(kpiComment: KpiComment) {
    this.selected = kpiComment;
  }

  update(kpiComment: KpiComment) {
    this.loading = true;
    this.kpiCommentService
      .update(kpiComment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.kpiComments = this.kpiComments.map(h => (h.id === kpiComment.id ? kpiComment : h)))
      );
  }
}

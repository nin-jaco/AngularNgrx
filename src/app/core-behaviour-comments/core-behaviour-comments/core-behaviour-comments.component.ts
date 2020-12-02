import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CoreBehaviourComment } from '../../core';
import { CoreBehaviourCommentService } from '../core-behaviour-comment.service';


@Component({
  selector: 'app-core-behaviour-comments',
  templateUrl: './core-behaviour-comments.component.html',
  styleUrls: ['./core-behaviour-comments.component.scss']
})
export class CoreBehaviourCommentsComponent implements OnInit {
  selected: CoreBehaviourComment;
  coreBehaviourComments: CoreBehaviourComment[];
  loading: boolean;

  constructor(private coreBehaviourCommentService: CoreBehaviourCommentService) {}

  ngOnInit() {
    this.getCoreBehaviourCommentes();
  }

  add(coreBehaviourComment: CoreBehaviourComment) {
    this.loading = true;
    this.coreBehaviourCommentService
      .add(coreBehaviourComment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedCoreBehaviourComment => (this.coreBehaviourComments = this.coreBehaviourComments.concat(addedCoreBehaviourComment)));
  }

  close() {
    this.selected = null;
  }

  delete(coreBehaviourComment: CoreBehaviourComment) {
    this.loading = true;
    this.close();
    this.coreBehaviourCommentService
      .delete(coreBehaviourComment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.coreBehaviourComments = this.coreBehaviourComments.filter(h => h.id !== coreBehaviourComment.id))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getCoreBehaviourCommentes() {
    this.loading = true;
    this.coreBehaviourCommentService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(coreBehaviourCommentes => (this.coreBehaviourComments = coreBehaviourCommentes));
    this.close();
  }

  select(coreBehaviourComment: CoreBehaviourComment) {
    this.selected = coreBehaviourComment;
  }

  update(coreBehaviourComment: CoreBehaviourComment) {
    this.loading = true;
    this.coreBehaviourCommentService
      .update(coreBehaviourComment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.coreBehaviourComments = this.coreBehaviourComments.map(h => (h.id === coreBehaviourComment.id ? coreBehaviourComment : h)))
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  coreBehaviourComments$: Observable<CoreBehaviourComment[]>;
  loading$: Observable<boolean>;

  constructor(private coreBehaviourCommentService: CoreBehaviourCommentService) {
    this.coreBehaviourComments$ = coreBehaviourCommentService.entities$;
    this.loading$ = coreBehaviourCommentService.loading$;
  }

  ngOnInit() {
    this.getAll();
  }

  add(coreBehaviourComment: CoreBehaviourComment) {
    this.coreBehaviourCommentService.add(coreBehaviourComment);
  }
  
  delete(coreBehaviourComment: CoreBehaviourComment) {
    this.coreBehaviourCommentService.delete(coreBehaviourComment);
    this.close();
  }
  
  getAll() {
    this.coreBehaviourCommentService.getAll();
    this.close();
  }
  
  update(coreBehaviourComment: CoreBehaviourComment) {
    this.coreBehaviourCommentService.update(coreBehaviourComment);
  }

  close() {
    this.selected = null;
  }
/*
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

  getCoreBehaviourComments() {
    this.loading = true;
    this.coreBehaviourCommentService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(coreBehaviourComments => (this.coreBehaviourComments = coreBehaviourComments));
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
  }*/
}

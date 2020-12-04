import { Component, OnInit } from '@angular/core';
import { TComment } from '@app/core/model/TComment';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  selected: TComment;
  comments$: Observable<TComment[]>;
  loading$: Observable<boolean>;

  constructor(private commentService: CommentService) {
    this.comments$ = commentService.entities$;
    this.loading$ = commentService.loading$;
  }

  ngOnInit() {
    this.getAll();
  }

  add(comment: TComment) {
    this.commentService.add(comment);
  }

  delete(comment: TComment) {
    this.commentService.delete(comment);
    this.close();
  }

  getAll() {
    this.commentService.getAll();
    this.close();
  }

  update(comment: TComment) {
    this.commentService.update(comment);
  }

  close() {
    this.selected = null;
  }
  /*
  add(comment: CoreBehaviourComment) {
    this.loading = true;
    this.commentService
      .add(comment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(addedCoreBehaviourComment => (this.comments = this.comments.concat(addedCoreBehaviourComment)));
  }

  close() {
    this.selected = null;
  }

  delete(comment: CoreBehaviourComment) {
    this.loading = true;
    this.close();
    this.commentService
      .delete(comment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () => (this.comments = this.comments.filter(h => h.id !== comment.id))
      );
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getCoreBehaviourComments() {
    this.loading = true;
    this.commentService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(comments => (this.comments = comments));
    this.close();
  }

  select(comment: CoreBehaviourComment) {
    this.selected = comment;
  }

  update(comment: CoreBehaviourComment) {
    this.loading = true;
    this.commentService
      .update(comment)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.comments = this.comments.map(h => (h.id === comment.id ? comment : h)))
      );
  }*/
}

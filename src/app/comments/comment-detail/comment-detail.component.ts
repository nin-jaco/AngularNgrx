import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TComment } from '@app/core/model/TComment';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentDetailComponent implements OnChanges {
  @Input() Comment: TComment;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<TComment>();
  @Output() update = new EventEmitter<TComment>();

  @ViewChild('name', { static: true }) nameElement: ElementRef;

  addMode = false;

  form = this.fb.group({
    id: [],
    name: ['', Validators.required],
    saying: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    this.setFocus();
    if (this.Comment && this.Comment.id) {
      this.form.patchValue(this.Comment);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addComment(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.Comment, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveComment(form: FormGroup) {
    if (this.addMode) {
      this.addComment(form);
    } else {
      this.updateComment(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateComment(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.Comment, ...value });
    }
    this.close();
  }
}

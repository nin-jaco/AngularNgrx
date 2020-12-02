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
import { CoreBehaviourComment } from 'src/app/core/model/core-behaviour-comment.model';

@Component({
  selector: 'app-Core-Behaviour-Comment-detail',
  templateUrl: './Core-Behaviour-Comment-detail.component.html',
  styleUrls: ['./Core-Behaviour-Comment-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreBehaviourCommentDetailComponent implements OnChanges {
  @Input() CoreBehaviourComment: CoreBehaviourComment;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<CoreBehaviourComment>();
  @Output() update = new EventEmitter<CoreBehaviourComment>();

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
    if (this.CoreBehaviourComment && this.CoreBehaviourComment.id) {
      this.form.patchValue(this.CoreBehaviourComment);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addCoreBehaviourComment(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.CoreBehaviourComment, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveCoreBehaviourComment(form: FormGroup) {
    if (this.addMode) {
      this.addCoreBehaviourComment(form);
    } else {
      this.updateCoreBehaviourComment(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateCoreBehaviourComment(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.CoreBehaviourComment, ...value });
    }
    this.close();
  }
}

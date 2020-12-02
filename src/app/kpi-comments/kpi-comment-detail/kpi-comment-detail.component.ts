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
import { KpiComment } from '../../core';

@Component({
  selector: 'app-kpi-comment-detail',
  templateUrl: './kpi-comment-detail.component.html',
  styleUrls: ['./kpi-comment-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KpiCommentDetailComponent implements OnChanges {
  @Input() kpiComment: KpiComment;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<KpiComment>();
  @Output() update = new EventEmitter<KpiComment>();

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
    if (this.kpiComment && this.kpiComment.id) {
      this.form.patchValue(this.kpiComment);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addKpiComment(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.kpiComment, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveKpiComment(form: FormGroup) {
    if (this.addMode) {
      this.addKpiComment(form);
    } else {
      this.updateKpiComment(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateKpiComment(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.kpiComment, ...value });
    }
    this.close();
  }
}

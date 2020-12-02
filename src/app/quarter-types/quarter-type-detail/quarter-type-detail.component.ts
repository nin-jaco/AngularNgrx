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
import { QuarterType } from '../../core';

@Component({
  selector: 'app-quarter-type-detail',
  templateUrl: './quarter-type-detail.component.html',
  styleUrls: ['./quarter-type-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuarterTypeDetailComponent implements OnChanges {
  @Input() quarterType: QuarterType;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<QuarterType>();
  @Output() update = new EventEmitter<QuarterType>();

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
    if (this.quarterType && this.quarterType.id) {
      this.form.patchValue(this.quarterType);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addQuarterType(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.quarterType, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveQuarterType(form: FormGroup) {
    if (this.addMode) {
      this.addQuarterType(form);
    } else {
      this.updateQuarterType(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateQuarterType(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.quarterType, ...value });
    }
    this.close();
  }
}

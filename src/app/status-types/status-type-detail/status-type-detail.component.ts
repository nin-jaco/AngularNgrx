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
import { StatusType } from '../../core';

@Component({
  selector: 'app-status-type-detail',
  templateUrl: './status-type-detail.component.html',
  styleUrls: ['./status-type-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusTypeDetailComponent implements OnChanges {
  @Input() statusType: StatusType;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<StatusType>();
  @Output() update = new EventEmitter<StatusType>();

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
    if (this.statusType && this.statusType.id) {
      this.form.patchValue(this.statusType);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addStatusType(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.statusType, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveStatusType(form: FormGroup) {
    if (this.addMode) {
      this.addStatusType(form);
    } else {
      this.updateStatusType(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateStatusType(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.statusType, ...value });
    }
    this.close();
  }
}

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
import { Period } from '../../core';

@Component({
  selector: 'app-period-detail',
  templateUrl: './period-detail.component.html',
  styleUrls: ['./period-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeriodDetailComponent implements OnChanges {
  @Input() period: Period;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<Period>();
  @Output() update = new EventEmitter<Period>();

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
    if (this.period && this.period.id) {
      this.form.patchValue(this.period);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addPeriod(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.period, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  savePeriod(form: FormGroup) {
    if (this.addMode) {
      this.addPeriod(form);
    } else {
      this.updatePeriod(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updatePeriod(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.period, ...value });
    }
    this.close();
  }
}

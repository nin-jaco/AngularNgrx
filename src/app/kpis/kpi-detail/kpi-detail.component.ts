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
import { Kpi } from '../../core';

@Component({
  selector: 'app-kpi-detail',
  templateUrl: './kpi-detail.component.html',
  styleUrls: ['./kpi-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KpiDetailComponent implements OnChanges {
  @Input() kpi: Kpi;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<Kpi>();
  @Output() update = new EventEmitter<Kpi>();

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
    if (this.kpi && this.kpi.id) {
      this.form.patchValue(this.kpi);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addKpi(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.kpi, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveKpi(form: FormGroup) {
    if (this.addMode) {
      this.addKpi(form);
    } else {
      this.updateKpi(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateKpi(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.kpi, ...value });
    }
    this.close();
  }
}

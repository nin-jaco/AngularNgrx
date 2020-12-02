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
import { CoreBehaviourType } from '../../core';

@Component({
  selector: 'app-core-behaviour-type-detail',
  templateUrl: './core-behaviour-type-detail.component.html',
  styleUrls: ['./core-behaviour-type-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreBehaviourTypeDetailComponent implements OnChanges {
  @Input() coreBehaviourType: CoreBehaviourType;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<CoreBehaviourType>();
  @Output() update = new EventEmitter<CoreBehaviourType>();

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
    if (this.coreBehaviourType && this.coreBehaviourType.id) {
      this.form.patchValue(this.coreBehaviourType);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addCoreBehaviourType(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.coreBehaviourType, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveCoreBehaviourType(form: FormGroup) {
    if (this.addMode) {
      this.addCoreBehaviourType(form);
    } else {
      this.updateCoreBehaviourType(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateCoreBehaviourType(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.coreBehaviourType, ...value });
    }
    this.close();
  }
}

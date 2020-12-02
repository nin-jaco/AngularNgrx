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
import { CoreBehaviour } from '../../core';

@Component({
  selector: 'app-core-behaviour-detail',
  templateUrl: './core-behaviour-detail.component.html',
  styleUrls: ['./core-behaviour-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreBehaviourDetailComponent implements OnChanges {
  @Input() coreBehaviour: CoreBehaviour;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<CoreBehaviour>();
  @Output() update = new EventEmitter<CoreBehaviour>();

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
    if (this.coreBehaviour && this.coreBehaviour.id) {
      this.form.patchValue(this.coreBehaviour);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addCoreBehaviour(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.coreBehaviour, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveCoreBehaviour(form: FormGroup) {
    if (this.addMode) {
      this.addCoreBehaviour(form);
    } else {
      this.updateCoreBehaviour(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateCoreBehaviour(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.coreBehaviour, ...value });
    }
    this.close();
  }
}

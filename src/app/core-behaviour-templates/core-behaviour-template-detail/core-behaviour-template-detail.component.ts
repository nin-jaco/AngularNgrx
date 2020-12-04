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
import { TCoreBehaviourTemplate } from '@app/core/model/TCoreBehaviourTemplate';

@Component({
  selector: 'app-core-behaviour-template-detail',
  templateUrl: './core-behaviour-template-detail.component.html',
  styleUrls: ['./core-behaviour-template-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreBehaviourTemplateDetailComponent implements OnChanges {
  @Input() coreBehaviourTemplate: TCoreBehaviourTemplate;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<TCoreBehaviourTemplate>();
  @Output() update = new EventEmitter<TCoreBehaviourTemplate>();

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
    if (this.coreBehaviourTemplate && this.coreBehaviourTemplate.id) {
      this.form.patchValue(this.coreBehaviourTemplate);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addCoreBehaviourType(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.coreBehaviourTemplate, ...value });
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
      this.update.emit({ ...this.coreBehaviourTemplate, ...value });
    }
    this.close();
  }
}

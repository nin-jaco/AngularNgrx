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
import { Goal } from '../../core';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalDetailComponent implements OnChanges {
  @Input() goal: Goal;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<Goal>();
  @Output() update = new EventEmitter<Goal>();

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
    if (this.goal && this.goal.id) {
      this.form.patchValue(this.goal);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addGoal(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.goal, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveGoal(form: FormGroup) {
    if (this.addMode) {
      this.addGoal(form);
    } else {
      this.updateGoal(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateGoal(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.goal, ...value });
    }
    this.close();
  }
}

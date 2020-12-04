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
import { TGoalStatus } from '@app/core/model/TGoalStatus';

@Component({
  selector: 'app-goal-status-detail',
  templateUrl: './goal-status-detail.component.html',
  styleUrls: ['./goal-status-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalStatusDetailComponent implements OnChanges {
  @Input() goalStatus: TGoalStatus;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<TGoalStatus>();
  @Output() update = new EventEmitter<TGoalStatus>();

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
    if (this.goalStatus && this.goalStatus.id) {
      this.form.patchValue(this.goalStatus);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addGoalStatus(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.goalStatus, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveGoalStatus(form: FormGroup) {
    if (this.addMode) {
      this.addGoalStatus(form);
    } else {
      this.updateGoalStatus(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateGoalStatus(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.goalStatus, ...value });
    }
    this.close();
  }
}

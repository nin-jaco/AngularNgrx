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
import { Rating } from '../../core';

@Component({
  selector: 'app-rating-detail',
  templateUrl: './rating-detail.component.html',
  styleUrls: ['./rating-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingDetailComponent implements OnChanges {
  @Input() rating: Rating;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<Rating>();
  @Output() update = new EventEmitter<Rating>();

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
    if (this.rating && this.rating.id) {
      this.form.patchValue(this.rating);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addRating(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.rating, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveRating(form: FormGroup) {
    if (this.addMode) {
      this.addRating(form);
    } else {
      this.updateRating(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateRating(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.rating, ...value });
    }
    this.close();
  }
}

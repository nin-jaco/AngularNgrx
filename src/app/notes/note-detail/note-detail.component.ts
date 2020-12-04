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
import { TNote } from '@app/core/model/TNote';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteDetailComponent implements OnChanges {
  @Input() note: TNote;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<TNote>();
  @Output() update = new EventEmitter<TNote>();

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
    if (this.note && this.note.id) {
      this.form.patchValue(this.note);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addNote(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.note, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveNote(form: FormGroup) {
    if (this.addMode) {
      this.addNote(form);
    } else {
      this.updateNote(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateNote(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.note, ...value });
    }
    this.close();
  }
}

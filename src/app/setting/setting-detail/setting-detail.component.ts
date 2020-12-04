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
import { TSetting } from '@app/core/model/TSetting';

@Component({
  selector: 'app-setting-detail',
  templateUrl: './setting-detail.component.html',
  styleUrls: ['./setting-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingDetailComponent implements OnChanges {
  @Input() setting: TSetting;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<TSetting>();
  @Output() update = new EventEmitter<TSetting>();

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
    if (this.setting && this.setting.id) {
      this.form.patchValue(this.setting);
      this.addMode = false;
    } else {
      this.form.reset();
      this.addMode = true;
    }
  }

  addSetting(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.add.emit({ ...this.setting, ...value });
    }
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  saveSetting(form: FormGroup) {
    if (this.addMode) {
      this.addSetting(form);
    } else {
      this.updateSetting(form);
    }
  }

  setFocus() {
    this.nameElement.nativeElement.focus();
  }

  updateSetting(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.setting, ...value });
    }
    this.close();
  }
}

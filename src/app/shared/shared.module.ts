import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { FilterComponent } from './filter/filter.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDatepicker
} from '@angular/material';

// Other modules that are both imported and exported
export const modules = [
  CommonModule,
  ReactiveFormsModule,
  MatDatepicker,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
];

@NgModule({
  imports: [modules],
  exports: [modules, FilterComponent, ReactiveFormsModule],
  declarations: [FilterComponent]
})
export class SharedModule {}

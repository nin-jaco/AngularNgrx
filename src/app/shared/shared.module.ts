import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { FilterComponent } from './filter/filter.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

// Other modules that are both imported and exported
export const modules = [
  CommonModule,
  ReactiveFormsModule,  
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
];

@NgModule({
  imports: [modules],
  exports: [modules, FilterComponent,ReactiveFormsModule],
  declarations: [FilterComponent]
})
export class SharedModule {}

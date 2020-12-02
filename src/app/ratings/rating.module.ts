import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RatingDetailComponent } from './rating-detail/rating-detail.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { RatingService } from './rating.service';
import { RatingsComponent } from './ratings/ratings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RatingsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RatingsComponent, RatingDetailComponent],
  declarations: [RatingsComponent, RatingDetailComponent, RatingListComponent],
  providers: [RatingService]
})
export class RatingsModule {}

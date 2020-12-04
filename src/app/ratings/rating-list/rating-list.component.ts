import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TRating } from '@app/core/model/TRating';
import { ModalComponent } from '../../core';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingListComponent {
  @Input() ratings: TRating[];
  @Input() selectedRating: TRating;
  @Output() deleted = new EventEmitter<TRating>();
  @Output() selected = new EventEmitter<TRating>();

  constructor(public dialog: MatDialog) {}

  byId(rating: TRating) {
    return rating.id;
  }

  select(rating: TRating) {
    this.selected.emit(rating);
  }

  deleteRating(rating: TRating) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '250px';
    dialogConfig.data = {
      title: 'Delete Rating',
      message: `Do you want to delete ${rating.description}`
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(deleteIt => {
      console.log('The dialog was closed');
      if (deleteIt) {
        this.deleted.emit(rating);
      }
    });
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Rating, ModalComponent } from '../../core';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingListComponent {
  @Input() ratings: Rating[];
  @Input() selectedRating: Rating;
  @Output() deleted = new EventEmitter<Rating>();
  @Output() selected = new EventEmitter<Rating>();

  constructor(public dialog: MatDialog) {}

  byId(rating: Rating) {
    return rating.id;
  }

  select(rating: Rating) {
    this.selected.emit(rating);
  }

  deleteRating(rating: Rating) {
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

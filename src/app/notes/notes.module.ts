import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteService } from './note.service';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: NotesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [NotesComponent, NoteDetailComponent],
  declarations: [NotesComponent, NoteDetailComponent, NoteListComponent],
  providers: [NoteService]
})
export class NotesModule {}

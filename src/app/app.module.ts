import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { AppStoreModule } from './store/app-store.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'periods' },
  {
    path: 'corebehaviours',
    loadChildren: () =>
      import('./core-behaviours/core-behaviours.module').then(m => m.CoreBehavioursModule)
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./notes/notes.module').then(m => m.NotesModule)
  },
  {
    path: 'periods',
    loadChildren: () =>
      import('./periods/periods.module').then(m => m.PeriodsModule)
  },
  {
    path: 'goals',
    loadChildren: () =>
      import('./goals/goals.module').then(m => m.GoalsModule)
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppStoreModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

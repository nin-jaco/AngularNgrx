import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ToastService } from '../core';
import { TSetting } from '../core/model/TSetting';
// import { SettingsModule } from './settings.module';

const api = 'https://localhost:44324/api';

@Injectable({ providedIn: 'root' })
export class SettingService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/vantage/settings`;
    const msg = 'Settings retrieved successfully!';
    return this.http.get<TSetting[]>(url).pipe(
      tap(() => this.toastService.openSnackBar(msg, 'GET')),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(setting: TSetting) {
    return this.http
      .delete(`${api}/vantage/settings/${setting.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `Setting ${setting.settingName} deleted`,
            'DELETE'
          )
        )
      );
  }

  add(setting: TSetting) {
    return this.http
      .post<TSetting>(`${api}/vantage/settings/`, setting)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `Setting ${setting.settingName} added`,
            'POST'
          )
        )
      );
  }

  update(setting: TSetting) {
    return this.http
      .put<TSetting>(`${api}/vantage/settings/${setting.id}`, setting)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(
            `Setting ${setting.settingName} updated`,
            'PUT'
          )
        )
      );
  }
}

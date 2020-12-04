import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from '@app/core';
import { TKpi } from '@app/core/model/TKpi';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// import { KpisModule } from './kpis.module';

const api = 'https://localhost:44324/api';

@Injectable({ providedIn: 'root' })
export class KpiService {
  constructor(private http: HttpClient, private toastService: ToastService) {}

  logout() {
    return this.http.get(`${api}/logout`);
  }

  getProfile() {
    return this.http.get<any>(`${api}/profile`);
  }

  getAll() {
    const url = `${api}/hr/kpis`;
    const msg = 'Kpis retrieved successfully!';
    return this.http.get<TKpi[]>(url).pipe(
      tap(() => this.toastService.openSnackBar(msg, 'GET')),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

  delete(kpi: TKpi) {
    return this.http
      .delete(`${api}/hr/kpis/${kpi.id}`)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Kpi ${kpi.id} deleted`, 'DELETE')
        )
      );
  }

  add(kpi: TKpi) {
    return this.http
      .post<TKpi>(`${api}/hr/kpis/`, kpi)
      .pipe(
        tap(() => this.toastService.openSnackBar(`Kpi ${kpi.id} added`, 'POST'))
      );
  }

  update(kpi: TKpi) {
    return this.http
      .put<TKpi>(`${api}/hr/kpis/${kpi.id}`, kpi)
      .pipe(
        tap(() =>
          this.toastService.openSnackBar(`Kpi ${kpi.id} updated`, 'PUT')
        )
      );
  }
}

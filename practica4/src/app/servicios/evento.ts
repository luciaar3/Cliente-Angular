import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Evento {

  private eventsEndpoint = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) {}

  getEventos(): Observable<IEvent[]> {
    return this.http
    .get<IEvent[]>(this.eventsEndpoint)
    .pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () =>
            new Error(
            `Error obteniendo productos. Código de servidor: ${resp.status}.
              Mensaje: ${resp.message}`,
            ),
        ),
      ),
    );
  }

  addEventos(event: IEvent): Observable<IEvent>{
    return this.http
      .post<IEvent>(this.eventsEndpoint, event)
      .pipe(
        catchError((resp: HttpErrorResponse) =>
          throwError(
            () =>
            new Error(
              `Error crear producto. Código de servidor: ${resp.status}. Mensaje:
              ${resp.message}`,
            ),
          ),
        ),
      );
  }

  deleteEventos(id: string): Observable<any>{
    return this.http
      .delete<IEvent>(`${this.eventsEndpoint}/${id}`)
      .pipe(
        catchError((resp: HttpErrorResponse) =>
          throwError(
            () =>
            new Error(
              `Error crear producto. Código de servidor: ${resp.status}. Mensaje:
              ${resp.message}`,
            ),
          ),
        ),
      );
  }
}

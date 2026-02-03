import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Evento {

  private eventsEndpoint = 'http://localhost:3000/eventos';
  constructor(private http: HttpClient) {}

  getEventos(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.eventsEndpoint);
  }
}

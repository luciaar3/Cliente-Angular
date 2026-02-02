import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root',
})
export class Evento {
   private eventosIniciales: IEvent[] = [
    { title: 'Concierto', description: 'En Valencia', date: '10-04-2027', price:  30.23, image: '' },
    { title: 'Charla Angular', description: 'En la UPV',date: '13-02-2026',price:  45.00, image: '' },
    { title: 'Taller de TypeScript', description: 'Online', date: '12-09-2027', price:  89.99, image: '' }
  ];

  constructor() {}

  getEventos(): IEvent[] {
    return [...this.eventosIniciales];
  }
}

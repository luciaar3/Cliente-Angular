import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';

@Component({
  selector: 'app-events-show',
  imports: [],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {

  events: IEvent[] = [
    {
      title: 'Concierto de Taylor Swift',
      image: '',
      date: '2026-12-04',
      description: 'Fabuloso concierto de la gran cantante Taylor Swift',
      price: 24.99,
    },
    {
      title: 'Concierto de Rosalía',
      image: '',
      date: '2026-12-17',
      description: 'Fabuloso concierto de la gran cantante Rosalía',
      price: 45.99,
    },
  ];

}

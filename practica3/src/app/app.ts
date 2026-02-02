import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventoItem } from './evento-item/evento-item';
import { EventoAdd } from './evento-add/evento-add';
import { IEvent } from './interfaces/i-event';
import { EventsShow } from './events-show/events-show';
import { Evento } from './servicios/evento';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventoItem, EventoAdd, EventsShow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  eventos: IEvent[] = [];

  constructor(private eventoService: Evento) {}

  ngOnInit() {
    this.eventos = this.eventoService.getEventos();
  }

  eliminarEvento(evento: IEvent) {
  this.eventos = this.eventos.filter(e => e !== evento);
  }

  agregarEvento(evento: IEvent) {
    this.eventos = [...this.eventos, evento];
  }


}

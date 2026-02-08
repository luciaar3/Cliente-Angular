import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { FormsModule } from '@angular/forms';
import { Evento } from '../servicios/evento';
import { EventoAdd } from '../evento-add/evento-add';
import { EventoItem } from '../evento-item/evento-item';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events-show',
  imports: [CommonModule, FormsModule, EventoAdd, EventoItem, RouterLink],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  orderDate() {
    this.searchText = '';

    this.events.sort((a, b) =>
      a.date.localeCompare(b.date)
    );
  }
  orderPrice() {
    this.searchText = '';

    this.events.sort((a, b) =>
      a.price - b.price
    );
  }
  searchText: string = '';

  newEvent: IEvent = {
    id: '',
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };

  addEvent(): void {
    this.events.push({ ...this.newEvent });
    this.newEvent = {id: '', title: '', description: '', image: '', price: 0, date: '' };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvent.image = reader.result as string;
    });
  }

  events: IEvent[] = [];

  events$: Observable<IEvent[]> | undefined;

  constructor(private eventoService: Evento) {
    this.events$ = this.eventoService.getEventos();
  }
    
  eliminarEvento(evento: IEvent) {
  this.eventoService.deleteEventos(evento.id!).subscribe(() =>
    this.events = this.events.filter(e => e.id !== evento.id));
  }

  agregarEvento(evento: IEvent) {
    this.eventoService.addEventos(evento).subscribe(e => {
      this.events = [...this.events, e];
    }); 
  }

}

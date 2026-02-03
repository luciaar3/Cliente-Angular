import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Evento } from '../servicios/evento';
import { EventoAdd } from '../evento-add/evento-add';
import { EventoItem } from '../evento-item/evento-item';

@Component({
  selector: 'app-events-show',
  imports: [NgClass, FormsModule, EventoAdd, EventoItem],
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
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };

  addEvent(): void {
    this.events.push({ ...this.newEvent });
    this.newEvent = { title: '', description: '', image: '', price: 0, date: '' };
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

  constructor(private eventoService: Evento) {}

  ngOnInit() {
    this.events = this.eventoService.getEventos();
  }

  eliminarEvento(evento: IEvent) {
  this.events = this.events.filter(e => e !== evento);
  }

  agregarEvento(evento: IEvent) {
    this.events = [...this.events, evento];
  }

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventoItem } from './evento-item/evento-item';
import { EventoAdd } from './evento-add/evento-add';
import { EventsShow } from './events-show/events-show';
import { eventFilterPipe } from './pipes/event-filter-pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, eventFilterPipe, EventoItem, EventoAdd, EventsShow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


}

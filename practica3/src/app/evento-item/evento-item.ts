import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Component({
  selector: 'evento-item',
  imports: [],
  templateUrl: './evento-item.html',
  styleUrl: './evento-item.css',
})
export class EventoItem {

  @Input() evento!: IEvent;
  @Output() delete = new EventEmitter<void>();

  deleteEvento(){
    this.delete.emit();
  }
}

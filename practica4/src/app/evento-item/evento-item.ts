import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { TitleCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'evento-item',
  imports: [TitleCasePipe, CurrencyPipe, DatePipe],
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

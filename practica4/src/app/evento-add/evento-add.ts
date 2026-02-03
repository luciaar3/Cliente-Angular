import { Component, EventEmitter, Output } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'evento-add',
  imports: [FormsModule],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {

  @Output() addEvento = new EventEmitter<IEvent>();

  nuevoEvento: IEvent ={
      title: '',
      description: '',
      date: '',
      price:  0,
      image : '',
    };

  guardarEvento(){
    this.addEvento.emit({ ...this.nuevoEvento});

    this.nuevoEvento =
    {
      title: '',
      description: '',
      date: '',
      price:  0,
      image : '',
    };
  }

  changeImage(input: any) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      this.nuevoEvento.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

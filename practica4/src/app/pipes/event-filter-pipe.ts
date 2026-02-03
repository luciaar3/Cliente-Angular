import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'eventFilter'
})
export class eventFilterPipe implements PipeTransform {

  transform(events: IEvent[], searchText: string): IEvent[] {
    if (!events || !searchText) return events;

    searchText = searchText.toLowerCase();

    return events.filter((event) => 
      event.title.toLowerCase().includes(searchText) 
    );
  }
}

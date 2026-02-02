import { eventFilterPipe } from './event-filter-pipe';

describe('EventFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new eventFilterPipe();
    expect(pipe).toBeTruthy();
  });
});

import { Time24Pipe } from './time24.pipe';

describe('HourPipe', () => {
  it('create an instance', () => {
    const pipe = new Time24Pipe();
    expect(pipe).toBeTruthy();
  });
});

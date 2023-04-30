import { StudentnamePipe } from './studentname.pipe';

describe('StudentnamePipe', () => {
  it('create an instance', () => {
    const pipe = new StudentnamePipe();
    expect(pipe).toBeTruthy();
  });
});

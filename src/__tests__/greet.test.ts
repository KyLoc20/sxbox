import { greet } from '../index';
test('My Greet', () => {
  expect(greet('Kyloc')).toBe('Hello Kyloc!');
});

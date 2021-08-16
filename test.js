const { getGreeting, simpleAddition } = require('./project.js');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('can do simple addition', () => {
  expect(simpleAddition(9, 8)).toBe(17);
});
const simpleAddition = require('./project');
const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('can do simple addition', () => {
  expect(simpleAddition(9, 8)).toBe(17);
});
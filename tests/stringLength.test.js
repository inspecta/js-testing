const stringLength = require('../modules/stringLength')

test('Check string length', () => {
  expect(stringLength('a')).toBeGreaterThanOrEqual(1);
  expect(stringLength('Mulinde')).toBeLessThan(9);
})


test('Count characters in a string', () => {
  expect(stringLength('derrick')).toBe(7);
})

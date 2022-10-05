const reverseString = require('../modules/reverseString')

test('Check length of string to be reversed', () => {
  expect(reverseString('abcd').length).toBeGreaterThanOrEqual(2);
})

test('Check reversed string', () => {
  expect(reverseString('box')).toBe('xob');
})
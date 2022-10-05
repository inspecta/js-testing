const Capitalize = require('../modules/capitalize');

test('Capitalize first character of a string ', () => {
  expect(Capitalize('derrick')).toBe('Derrick');
})

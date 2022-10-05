const Calculator = require('../modules/Calculator')
const calc = new Calculator();

describe('My calculator', () => {
  //Addition
  test('Addition ', () => {
    expect(calc.add(1, 2)).toBe(3);
  })

  //Subtraction
  test('Subtraction ', () => {
    expect(calc.subtract(3, 1)).toBe(2);
  })

  //Division
  test('Division ', () => {
    expect(calc.divide(20, 10)).toBe(2);
  })

  //Multiplication
  test('Multiplication ', () => {
    expect(calc.multiply(10, 2)).toBe(20);
  })

});
class Calculator {
  constructor() {
  }

  areNumbersIntegers = (x, y) => {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw new Error('Both numbers should be integers');
    }
  }

  add(x, y) {
    this.areNumbersIntegers(x, y);
    return x + y;
  }

  subtract(x, y) {
    this.areNumbersIntegers(x, y);
    return x - y;
  }

  divide(x, y) {
    this.areNumbersIntegers(x, y);
    if (!y) throw new Error('Invalid division - Cannot divide by Zero');
    return x / y;
  }

  multiply(x, y) {
    this.areNumbersIntegers(x, y);
    return x * y;
  }
}

module.exports = Calculator;
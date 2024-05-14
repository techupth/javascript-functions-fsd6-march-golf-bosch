// Start coding here
let calculator = {
  add: function add(a, b) {
    return a + b;
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
  divide: function devide(a, b) {
    return a / b;
  },
};

const addResult = calculator.add(10, 20);
console.log(addResult);

const divideResult = calculator.divide(3000, 10);
console.log(divideResult);

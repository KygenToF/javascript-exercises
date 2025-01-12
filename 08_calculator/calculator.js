const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	return array.reduce((accumulator, current) => add(accumulator, current), 0)
};

const multiply = function(array) {
  return array.reduce((accumulator, current) => accumulator * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	product = 1;
  for (i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

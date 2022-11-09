const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, element) => {
    return total += element;
  }, 0)
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a == 0) return 1;
  let product  = 1;

	for(let i = a; i > 0; i--) {
    product *= a;
  }
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

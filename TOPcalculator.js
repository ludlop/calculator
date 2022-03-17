function add(num1, num2,...argument) {
    let addends = Array.from(arguments)
    let result = 0;
      for (i = 0; i < addends.length; i++) {
      result += addends[i];
    };
    return result; 
  };

function subtract(num1, num2) {
	let result = num1 - num2;
  return result;
};

function multiply(array) {
  let result = 1;
	for (i = 0; i < array.length; i++) {
    result = result * array[i];
  };
  return result;
};

function divide(num1, num2) {
	let result = num1 / num2;
  return result;
};
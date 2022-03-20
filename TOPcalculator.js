function add(num1, num2,...argument) {
    let addends = Array.from(arguments);
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

function multiply(num1, num2,...argument) {
  let multipliers = Array.from(arguments)
  let result = 1;
	for (i = 0; i < multipliers.length; i++) {
    result = result * multipliers[i];
  };
  return result;
};

function divide(num1, num2) {
	let result = num1 / num2;
  return result;
};

function operate (operator, num1, num2) {

  if (operator == '+') 
    return add(num1, num2); 

    else if (operator == '-') 
      return subtract(num1, num2);

      else if (operator == '*')
        return multiply(num1, num2);
      
        else if (operator == '/')
          return divide(num1, num2);
      };
  
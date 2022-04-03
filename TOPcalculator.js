function add(num1, num2) {
    let result = num1 + num2;
    return result; 
  };

function subtract(num1, num2) {
	let result = num1 - num2;
  return result;
};

function multiply(num1, num2) {
  let result = num1 * num2;
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

      else if (operator == 'x')
        return multiply(num1, num2);
      
        else if (operator == '÷')
          return divide(num1, num2);
      };
  
  let displayValue;
  let num1;
  let num2;
  let numbers = document.querySelectorAll('.number');
  let entry = document.querySelector('#display');
  let operators = document.querySelectorAll('.operate');
  let operator;

  for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
      if (this.textContent == 'CLEAR') {
        entry.textContent = undefined;
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
      } else if (this.textContent == '.' && entry.textContent % 1 != 0) {
        alert("Your operand it's already a decimal number");
        } else if (operator == "÷" && this.textContent == 0) {
           alert("A number divided by zero it's infinit. Please enter another number");
           } else if (num1 != undefined && displayValue == '') {
             displayValue = this.textContent;
             entry.textContent = '';
             entry.textContent += displayValue;
             } else {
               entry.textContent += this.textContent;
               }
         });
  };
  
  // tengo que ver como guardo el operador anterior o donde lo pongo para poder hacer calculos en cadena
  operators.forEach((item) => {item.addEventListener('click', function() {
    if (num1 == undefined) {
      operator = this.textContent;
      num1 = Number(entry.textContent);
      displayValue = '';
    } else if (num1 != undefined && operator == undefined) {
      operator = this.textContent;
      displayValue = '';
      } else if (num1 != undefined && operator != undefined) {
        entry.textContent = +operate(operator, num1, Number(entry.textContent)).toFixed(5);
        num1 = Number(entry.textContent);
        displayValue = '';
        operator = this.textContent;
        } else {
        entry.textContent = +operate(this.textContent, num1, num2).toFixed(5);
        };
    });
  });
      /* if (num1 == undefined) {
        num1 = Number(entry.textContent);
        entry.textContent = '';
      } else if (((num1 && displayValue) != undefined) && (displayValue != num1))  {
          num2 = Number(entry.textContent);
          operate(operator, num1, Number(entry.textContent));
          entry.textContent = operate(operator, num1, num2);
      } else {
          num2 = Number(entry.textContent);
          };
      }); */
 

  /* for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
      displayValue2 = this.textContent;
      if (displayValue2 == 'CLEAR') {
        entry.textContent = '0';
      } else {
        entry.textContent += displayValue2;
      }
    });
  } */

  document.querySelector('.equal').addEventListener('click', () => {
    num2 = Number(entry.textContent);
    entry.textContent = +operate(operator, num1, num2).toFixed(5);
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    });



 /*    for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
      operator = this.textContent;
      operate(operator)
    }) */
  
  // x.addEventListener('keypress',  showOnDisplay);
  // x.addEventListener('click', showOnDisplay);
  // console.log(displayValue);
  // function showOnDisplay() {
  //   document.querySelector('.display').innerHTML = document.getElementById('numbandop').textContent
  //   displayValue += document.getElementById('numbandop').textContent
  // }
  
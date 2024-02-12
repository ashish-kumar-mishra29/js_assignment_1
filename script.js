'use strict';
// Calculation function 
function calculate() {
  // Get values and operator from input fields
  const value1 = parseFloat(document.getElementById('value1').value);
  const value2 = parseFloat(document.getElementById('value2').value);
  const operator = document.getElementById('operator').value;

  // Addition function
  function add(a, b) {
      return a + b;
  }

  // Subtraction function
  function subtract(a, b) {
      return a - b;
  }

  // Multiplication function
  function multiply(a, b) {
      return a * b;
  }

  // Division function
  function divide(a, b) {
      if (b === 0) {
          throw new Error('Cannot divide by zero');
      }
      return a / b;
  }

  // Checking that the given number is valid or not
  if (isNaN(value1) || isNaN(value2)) {
      document.getElementById('result').innerText = 'Please enter valid numbers.';
  } else {
      // Calculation based on the selected operator
      try {
          let result;
          switch (operator) {
              case 'add':
                  result = add(value1, value2);
                  break;
              case 'subtract':
                  result = subtract(value1, value2);
                  break;
              case 'multiply':
                  result = multiply(value1, value2);
                  break;
              case 'divide':
                  result = divide(value1, value2);
                  break;
              default:
                  throw new Error('Invalid operator');
          }

          // Display the result
          document.getElementById('result').innerText = `Result: ${result}`;
      } catch (error) {
          // If any error occur it will display an error with the message
          document.getElementById('result').innerText = error.message;
      }
  }
}
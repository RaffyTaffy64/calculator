
function add (num1, num2) {
  return num1 + num2
}
function subract (num1, num2) {
  return num1 - num2
}
function multiply (num1, num2) {
  return num1 * num2
}
function divide (num1, num2) {
  return num1 / num2
}
function power (num1, num2) {
  return num1 ^ num2
}
function mod (num1, num2) {
  return num1 % num2
}
function sqrt (num) {
  return num ** 0.5
}

function calculate(expression) {
  const token = expression.split(`_`)
 
  const operator = token[1]
  const num1 = Number(token[0])
  const num2 = Number(token[2])

    if (operator === `+`) {
      return add (num1, num2)
    }
    if (operator === `-`) {
      return subract (num1, num2)
    }
    if (operator === `*`) {
      return multiply (num1, num2)
    }
    if (operator === `/`) {
      return divide (num1, num2)
    }
    if (operator === `^`) {
      return power (num1, num2)
    }
    if (operator === `%`) {
      return mod (num1, num2)
    }
    if (operator === `sqrt`) {
      return sqrt (num1, num2)
    }
}
console.log(2 + 3)
/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});

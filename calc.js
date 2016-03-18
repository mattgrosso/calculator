
// DEFINE YOUR VARIABLES HERE
var display = "";
//this is the value displayed on the screen of the calculator
var currentNumber = "";
//this is the number that is currently being built on the coalculator
var previousNumber = "";
//this is the last number built by the calculator
var lastOperator = "";
//this is meant to keep a running total
var runningTotal = 0;
//this is the most recent operator pushed on the calculator
var figure = document.querySelector("figure");

// DEFINE YOUR FUNCTIONS HERE

function addToTotal(newNumber,runningTotal) {
  return runningTotal + newNumber;
}

function subtractFromTotal(newNumber, runningTotal){
  return runningTotal - newNumber;
}

function multiplyWithTotal(newNumber, runningTotal) {
  return runningTotal * newNumber;
}

function divideByTotal(newNumber, runningTotal) {
  return runningTotal / newNumber;
}
//for some reason my division function isn't working. I'm at a loss.

console.log(divideByTotal(2 / 8));

function handleButtonClick(element) {
  if(Number(element.value) || element.value === '0' || element.value === '.'){
      currentNumber = currentNumber + element.value;
      display = currentNumber;
      figure.innerHTML = display;
  } else if(element.value === '+'){
      if(runningTotal === ""){
        previousNumber = Number(currentNumber);
        lastOperator = element.value;
        runningTotal = Number(currentNumber);
        display = currentNumber + lastOperator;
        currentNumber = "";
        figure.innerHTML = display;
      } else{
      runningTotal = addToTotal(Number(currentNumber),runningTotal);
      previousNumber = Number(currentNumber);
      lastOperator = element.value;
      display = runningTotal + lastOperator;
      currentNumber = "";
      figure.innerHTML = display;
    }
  } else if(element.value === '-'){
      if(runningTotal === ""){
        previousNumber = Number(currentNumber);
        lastOperator = element.value;
        runningTotal = Number(currentNumber);
        display = currentNumber + lastOperator;
        currentNumber = "";
        figure.innerHTML = display;
      } else{
      runningTotal = subtractFromTotal(Number(currentNumber),runningTotal);
      previousNumber = Number(currentNumber);
      lastOperator = element.value;
      display = runningTotal + lastOperator;
      currentNumber = "";
      figure.innerHTML = display;
    }
  } else if(element.value === 'x'){
    console.log(runningTotal);
      if(runningTotal === ""){
        previousNumber = Number(currentNumber);
        lastOperator = element.value;
        runningTotal = Number(currentNumber);
        display = currentNumber + lastOperator;
        currentNumber = "";
        figure.innerHTML = display;
      } else{
      runningTotal = multiplyWithTotal(Number(currentNumber),runningTotal);
      previousNumber = Number(currentNumber);
      lastOperator = element.value;
      display = runningTotal + lastOperator;
      currentNumber = "";
      figure.innerHTML = display;
    }
  } else if(element.value === '/'){
      if(runningTotal === ""){
        console.log(runningTotal);
        previousNumber = Number(currentNumber);
        lastOperator = element.value;
        runningTotal = Number(currentNumber);
        display = currentNumber + lastOperator;
        currentNumber = "";
        figure.innerHTML = display;
      } else{
        console.log(runningTotal);
      runningTotal = divideByTotal(Number(currentNumber),runningTotal);
      previousNumber = Number(currentNumber);
      lastOperator = element.value;
      display = runningTotal + lastOperator;
      currentNumber = "";
      figure.innerHTML = display;
    }
  } else if(element.value === '=' && lastOperator === '+'){
      display = addToTotal(Number(currentNumber),Number(runningTotal));
      currentNumber = display;
      previousNumber = display;
      figure.innerHTML = display;
  } else if(element.value === '=' && lastOperator === '-'){
      display = subtractFromTotal(Number(currentNumber),Number(runningTotal));
      currentNumber = display;
      previousNumber = display;
      figure.innerHTML = display;
  } else if(element.value === '=' && lastOperator === 'x'){
      display = multiplyWithTotal(Number(currentNumber),Number(runningTotal));
      currentNumber = display;
      previousNumber = display;
      figure.innerHTML = display;
  } else if(element.value === '=' && lastOperator === '/'){
      display = divideByTotal(Number(previousNumber),Number(runningTotal));
      currentNumber = display;
      previousNumber = display;
      figure.innerHTML = display;
  } else if(element.value === 'clear'){
      display = "";
      currentNumber = "";
      previousNumber = "";
      lastOperator = "";
      runningTotal= "";
      figure.innerHTML = display;
  }
}


/**
 * This event handler will fire for ALL button clicks. You need to decide
 * what to do based on which button was clicked in the handler function
 * defined above.
 *
 * DO NOT CHANGE THIS!
 */
[].slice.call(document.querySelectorAll('button')).forEach(function(element) {
    element.addEventListener('click', function() {
        handleButtonClick(this);
    });
});



/** **************************************************************
 * These are our tests. If any of them fail you will see a message
 * in the developer tools "Console" - in which case the assignment
 * will NOT be considered complete!
 *
 *                  DO NOT CHANGE THESE LINES
 ****************************************************************/

document.querySelector('.run-tests').addEventListener('click', function() {
    var testOutput = document.querySelector('figure');

    try {
        // Button click handler + Addition (multiple inputs)
        handleButtonClick({ value: '1' });
        console.assert(testOutput.innerHTML === '1', testOutput.innerHTML);
        handleButtonClick({ value: '3' });
        console.assert(testOutput.innerHTML === '13', testOutput.innerHTML);
        handleButtonClick({ value: '+' });
        console.assert(testOutput.innerHTML === '13+', testOutput.innerHTML);
        handleButtonClick({ value: '7' });
        console.assert(testOutput.innerHTML === '13+7', testOutput.innerHTML);
        handleButtonClick({ value: '+' });
        console.assert(testOutput.innerHTML === '13+7+', testOutput.innerHTML);
        handleButtonClick({ value: '2' });
        console.assert(testOutput.innerHTML === '13+7+2', testOutput.innerHTML);
        handleButtonClick({ value: '.' });
        console.assert(testOutput.innerHTML === '13+7+2.', testOutput.innerHTML);
        handleButtonClick({ value: '7' });
        console.assert(testOutput.innerHTML === '13+7+2.7', testOutput.innerHTML);
        handleButtonClick({ value: '=' });
        console.assert(testOutput.innerHTML === '22.7', testOutput.innerHTML);

        // Clear
        handleButtonClick({ value: 'clear' });
        console.assert(testOutput.innerHTML === '', testOutput.innerHTML);

        // Addition
        console.assert(addToTotal(10, 3) === 13);
        console.assert(addToTotal('10', 3) === 13);
        console.assert(addToTotal('0', 13) === 13);
        console.assert(addToTotal(0, 13) === 13);
        console.assert(addToTotal('-20', 10) === -10);

        handleButtonClick({ value: 'clear' });

        // Subtraction
        console.assert(subtractFromTotal(10, 30) === 20);
        console.assert(subtractFromTotal('10', 30) === 20);
        console.assert(subtractFromTotal('0', 13) === 13);
        console.assert(subtractFromTotal(0, 13) === 13);
        console.assert(subtractFromTotal('-20', 10) === 30);

        handleButtonClick({ value: 'clear' });

        // Division
        console.assert(divideByTotal(10, 30) === 3);
        console.assert(divideByTotal('10', 30) === 3);
        console.assert(divideByTotal('0', 13) === 0);
        console.assert(divideByTotal(0, 13) === 0);
        console.assert(divideByTotal('-2', 10) === -5);

        handleButtonClick({ value: 'clear' });

        // Multiplication
        console.assert(multiplyWithTotal(10, 30) === 300);
        console.assert(multiplyWithTotal('10', 30) === 300);
        console.assert(multiplyWithTotal('0', 13) === 0);
        console.assert(multiplyWithTotal(0, 13) === 0);
        console.assert(multiplyWithTotal('-2', 10) === -20);

        handleButtonClick({ value: 'clear' });

    } catch(e) {
        console.error('There was an error during the test run:', e);
    }
});

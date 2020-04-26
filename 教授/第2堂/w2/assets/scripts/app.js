const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Get input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generate and write calculation log
function creatAndWriteOutput(operator, initialResult, enteredNumber) {
  const calcDescription = `${initialResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeTolog(operation, prevResult, number, result) {
  logEntries.push({
    operation,
    prevResult,
    number,
    result
  });
  console.log(logEntries);
}

function calculatedResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult -= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult -= enteredNumber;
    mathOperator = '/';
  }
  creatAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeTolog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculatedResult('ADD');
  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;
  // currentResult += enteredNumber;
  // creatAndWriteOutput('+', initialResult, enteredNumber);
  // writeTolog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  calculatedResult('SUBTRACT');
  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;
  // currentResult -= enteredNumber;
  // creatAndWriteOutput('-', initialResult, enteredNumber);
  // writeTolog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  calculatedResult('MULTIPLY');
  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;
  // currentResult *= enteredNumber;
  // creatAndWriteOutput('*', initialResult, enteredNumber);
  // writeTolog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  calculatedResult('DIVIDE');
  // const enteredNumber = getUserNumberInput();
  // const initialResult = currentResult;
  // currentResult /= enteredNumber;
  // creatAndWriteOutput('/', initialResult, enteredNumber);
  // writeTolog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

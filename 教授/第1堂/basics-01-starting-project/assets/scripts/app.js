const defaultResult = 0;
let currentResult = defaultResult;

function add(num1) {
  calculatedDescription = `${currentResult} + ${userInput.value}`;
  currentResult += parseInt(userInput.value);
  outputResult(currentResult, calculatedDescription);

  //const result = currentResult + parseInt(userInput.value);
  //outputResult(result, '');
  //currentResult = result;
}
function subtract(num1) {
  calculatedDescription = `${currentResult} + ${userInput.value}`;
  currentResult -= parseInt(userInput.value);
  outputResult(currentResult, calculatedDescription);

  //const result = currentResult + parseInt(userInput.value);
  //outputResult(result, '');
  //currentResult = result;
}
function multiply(num1) {
  calculatedDescription = `${currentResult} + ${userInput.value}`;
  currentResult *= parseInt(userInput.value);
  outputResult(currentResult, calculatedDescription);

  //const result = currentResult + parseInt(userInput.value);
  //outputResult(result, '');
  //currentResult = result;
}
function divide(num1) {
  calculatedDescription = `${currentResult} + ${userInput.value}`;
  currentResult /= parseInt(userInput.value);
  outputResult(currentResult, calculatedDescription);

  //const result = currentResult + parseInt(userInput.value);
  //outputResult(result, '');
  //currentResult = result;
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

//console.log(add(0, 5));
//console.log(add(5, 10));

//currentResult = ((defaultResult + 10) * 3) / 2 - 1;
//let calculatedDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

//let calculatedDescription = '(' + defaultResult + '+' + currentResult + ')';

//outputResult(currentResult, calculatedDescription);

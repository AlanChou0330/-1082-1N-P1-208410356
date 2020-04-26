const sumUp = (a, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};

const sumUpOutput = (resultHandler, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const showResult = result => {
  alert("The result after adding numbers is " + result);
};

console.log(sumUp(1, 5, 10));
console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));

console.log(sumUp(1, "bbbb", 5, "abc", 10));
console.log(sumUpOutput(showResult, 1, 5, 10));

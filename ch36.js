// Q-4
document.write(`Q-4 Write a function that takes three arguments num1, num2 
        & operator & compute the desired operation. Return and 
        show the desired result in your browser<br><br>`);
let num1 = +prompt("ENter Number one for calculation with number two");
let num2 = +prompt("ENter Number Two for calculation with number One");
let operator = prompt("Enter Operator - + * / ");
function compute(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      document.write("Invalid operator");
  }
  document.write(`Result : ${num1} ${operator} ${num2} = ${result}`);
}
compute(num1, num2, operator);

document.write(`<br><hr><br>`);

// Q-5
document.write(`Q-5 Write a function that squares its argument.<br><br>`);
let numSqr = +prompt('Enter Number i"ll show its square root');
function anyNumSqr(numSqr) {
  return numSqr * numSqr;
}
document.write(
  `The Square Root of : <b> ${numSqr} </b> </br> The Square root : `,
  anyNumSqr(numSqr)
);

document.write(`<br><hr><br>`);

// Q-6
document.write(
  `Q-6 Write a function that computes factorial of a number<br><br>`
);
let num = +prompt("Enter Number to see its factorial");
function factorial(num) {
  if (num < 0) {
    document.write("Error! Factorial for negative number does not exist.");
    return;
  }
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  document.write(`The factorial of ${num} is ${result}.`);
}
factorial(num);

document.write(`<br><hr><br>`);
// Q-7
document.write(
  `Q-7  Write a function that take start and end number as inputs 
        & display counting in your browser.<br><br>`
);
let startingNum = 45;
document.write(`The Starting Number : <b> ${startingNum} </b></br>`);
let endingNum = 58;
document.write(`The Last Name is <b> ${endingNum} </b></br>`);
function count(startNum, endNum) {
  for (let i = startNum; i <= endNum; i++) {
    document.write(i, "<br>");
  }
}
count(startingNum, endingNum);
document.write(`<br><hr><br>`);


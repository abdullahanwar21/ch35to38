// Q-1
document.write(
  `Q-1   Write a function that displays current date & time in your browser.<br><br>`
);
function createDate() {
  return new Date();
}
document.write("<b>" + createDate() + "</b>");
console.log();
document.write(`<br><hr><br>`);

// Q-2
document.write(
  `Q-2  Write a function that takes first & last name and then it greets the user using his full name.<br><br>`
);
let firstName = "Abdullah";
document.write(`The First Name is <b> ${firstName} </b></br>`);
let lastName = "Anwar";
document.write(`The Last Name is <b> ${lastName} </b></br>`);
function greeting() {
  let fullName = firstName.concat(lastName);
  return document.write(`<b>Hello Dear : ${fullName} </b> <br>`);
}
greeting();
document.write(`<br><hr><br>`);

// Q-3
document.write(`Q-3  Write a function that adds two numbers (input by user) 
        and returns the sum of two numbers..<br><br>`);
let firstNum = 90;
document.write(`The First value : <b> ${firstNum} </b></br>`);
let lastNum = 110;
document.write(`The Last Name is <b> ${lastNum} </b></br>`);
function sum() {
  return firstNum + lastNum;
}
document.write(`Sum of <b> ${firstNum} + ${lastNum} </b> = `, sum());
document.write(`<br><hr><br>`);

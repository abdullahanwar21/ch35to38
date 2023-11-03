
// Q-8
document.write(
  `Q-8   Write a nested function that computes hypotenuse of a 
        right angle triangle. .<br><br>`
);
let base = 25;
let perpendicular = 35;
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(x) {
    return x * x;
  }
  let hypotenuse2 = Math.sqrt(
    calculateSquare(base) + calculateSquare(perpendicular)
  );
  return hypotenuse2.toFixed(5);
}
document.write(
  `The Base is: ${base} <br> The perpendicular is : ${perpendicular} <br> Hypotenuse :`,
  calculateHypotenuse(base, perpendicular)
);
document.write(`<br><hr><br>`);

// Q-9
document.write(
  `Q-9  Write a function that calculates the area of a rectangle.<br><br>`
);
function calculateRectangle(width, height) {
  let areaOfRect = width * height;
  return areaOfRect;
}
let width = 5;
let height = 10;
document.write(
  `The Height of Rectangle : ${height} <br>The Width of Rectangle : ${width} <br> The Rectangle :`,
  calculateRectangle(height, width)
);
document.write(`<br><hr><br>`);

      // Q-10
      document.write(`Q-10 Write a JavaScript function that checks whether a passed 
        string is palindrome or not?<br><br>`);
      let enterStr = prompt("Enter Word to see its Palindrome Or Not!!");
      function checkPalindrome(enterStr) {
        let reverseStr = enterStr.split("").reverse("").join("");
        if (enterStr === reverseStr) {
          document.write(
            `Yes It's <b>Palindrome</b> Word <b> ${enterStr.toUpperCase()} </b></br>`
          );
        } else {
          document.write(
            `No It's Not a  <b>Palindrome</b> Word <b> ${enterStr.toUpperCase()} </b></br>`
          );
        }
      }
      checkPalindrome(enterStr);

      document.write(`<br><hr><br>`);

      // Q-11
      document.write(
        `Q-11  Write a JavaScript function that accepts a string as a 
         parameter and converts the first letter of each word of the 
         string in upper case. <br><br>`
      );
      let str = prompt("Enter sentence i\"ll show it's Title Case");
      document.write(`The Real One : <b>${str}</b> <br>`);
      function titleCase(str) {
        var sentence = str.toLowerCase().split(" ");
        for (var i = 0; i < sentence.length; i++) {
          sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }

        document.write(sentence.join(" "));
        return sentence;
      }
      document.write(`The Title Case : `);
      titleCase(str);
      document.write(`<br><hr><br>`);

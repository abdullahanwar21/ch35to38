
      // Q-12
      document.write(
        `Q-12   Write a JavaScript function that accepts a string as a 
         parameter and find the longest word within the string.<br><br>`
      );

      let userInput = prompt(
        'Enter sentence i"ll find longest word in sentence'
      );
      document.write(`The Sentence : <b> ${userInput}</b> <br>`);
      function findLongestWord(userInput) {
        let word = userInput.split(" ");
        console.log(word);
        let longestWord = "";
        for (let i = 0; i < word.length; i++) {
          const element = word[i];
          if (element.length > longestWord.length) {
            longestWord = element;
          }
        }
        return longestWord;
      }
      document.write(
        `The Longest Word In Sentence : <b>`,
        findLongestWord(userInput),
        "</b><br>"
      );

      document.write(`<br><hr><br>`);

      // Q-13
      document.write(
        `Q-13 Write a JavaScript function that accepts two arguments, a 
        string and a letter and the function will count the number of 
        function | JAVASCRIPT Page 3 of 4 occurrences of the specified letter within the string.Sample arguments : 'JSResourceS.com', 'o'.<br><br>`
      );
      function countLetterOccurrences(str, countLetter) {
        document.write(`The word is : <b>${str}</b><br>`);
        document.write(`The Letter is : <b>${countLetter}</b><br>`);
        let word = str.split("");
        console.log(word);
        let res = 0;
        for (let i = 0; i < word.length; i++) {
          const element = word[i];
          if (element === countLetter) {
            res++;
          }
        }
        document.write(`This Character Occurs : <b>${res}</b> <br>`);
        return res;
      }
      countLetterOccurrences("JSResourceS.com", "o");

      document.write(`<br><hr><br>`);

      // Q-14
      document.write(
        `Q-14 Create 2 functions that calculate properties of a circle, using 
        the definitions here..<br><br>`
      );

      let circleRadius = 20;
      document.write(
        `The Value of Circle Radius : <b>${circleRadius}</b></br>`
      );
      function calcCircumference(circleRadius) {
        let res = 2 * 3.14159 * circleRadius;
        return document.write(
          `The circumference is NN : <b>${res}</b> </br></br>`
        );
      }
      calcCircumference(circleRadius);
      let areaRadius = 5;
      document.write(`The Value of Area Radius : <b>${areaRadius}</b></br>`);
      function calcArea(radius) {
        let res2 = 3.14159 * radius * radius;
        return document.write(`The area is NN : <b>${res2}</b> </br>`);
      }
      calcArea(areaRadius);

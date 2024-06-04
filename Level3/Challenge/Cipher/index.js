const readline = require('readline-sync');
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? '));

function caesarCipher(str, shift) {
    var output = "";
     
    // Loop through each character in the input string
    for (var i = 0; i < str.length; i++) {
      var code = str[i].charCodeAt();
       
      // Check if the character is a letter
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        // Shift the letter by the shift amount, wrapping around the alphabet if necessary
        code += shift;
      }
       
      // Add the new character to the output string
       output += String.fromCharCode(code);
    }
     
    // Return the output string
    return output;
  }

console.log(caesarCipher(input, shift))
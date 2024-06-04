const readline = require('readline-sync');
const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? '));

function caesarCipher(string, shift) {
    var output = "";
     
    // loop through each character in the input
    for (var i = 0; i < string.length; i++) {
      var code = string[i].charCodeAt();
       
      // make sure its a letter
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      
        code += shift;
        if ((code > 90 && string[i] <='Z'|| code > 122))
          code -= 26;
      }
       
      // Add the new character to the output string
       output += String.fromCharCode(code);
    }
     
    // Return the output string
    return output;
  }

console.log(caesarCipher(input, shift))
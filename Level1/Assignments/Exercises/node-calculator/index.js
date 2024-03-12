const readline = require("readline-sync")

const sum = (num1, num2) => {
   console.log(parseFloat(num1) + parseFloat(num2))
}

const sub = (num1, num2) => {
    console.log(num1 - num2)
}

const div = (num1, num2) => {
    console.log(num1 / num2)
}

const mul = (num1, num2) => {
    console.log(num1 * num2)
}

const num1 = readline.question ('First Number ')


const num2 = readline.question ('Second Number ')


const operation = readline.question ('Operation(+, -, /, *) ')
 

     if (operation === '+') {
         sum(num1, num2);         
    } else if (operation === "-") {
        sub(num1, num2); 
    } else if (operation === "/") {
      div(num1, num2); 
    } else if (operation === "*"){
       mul(num1, num2); 
    }
 
 
 

    


const readline = require("readline-sync");
const name = readline.question("Welcome to the Escape Room! What is your name? ");



console.log("Hello " + name + "!")


let isAlive = true;
let hasKey = false;

while (isAlive === true){
    index = readline.keyIn("Would you like to: 1, Find the key? 2, Put hand in hole? 3, Open the door?", {limit:'123 '});
    
    
if (index === '1' && hasKey === false) {
    console.log(name + ', you have found the key!');
    hasKey = true;
 }
 else if (index === '1' && hasKey === true) {
    console.log(name + ', you already have the key!');
 }
 else if (index === '2') {
    console.log(name + ', you put your hand in the hole and died. GAME OVER');
    isAlive = false;

 } else if (index === '3' && hasKey === false) {
    console.log(name + ', the door is locked.');

 } else if (index === '3' && hasKey === true) {
    console.log(name + ', you unlocked the door and escaped! Congratulations');
    isAlive = false;
 }
}
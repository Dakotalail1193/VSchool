var greeting = "hello"
var upperGreeting = greeting.toUpperCase()
var lowerGreeting = greeting.toLowerCase()
var bothGreeting = upperGreeting.concat(lowerGreeting)
console.log(bothGreeting)

function middle(str) {
  return Math.floor(str.length / 2);

}
console.log(middle("hello"))
 console.log(middle("hello world"))

 function firstHalf(str) {
    return str.slice(0, str.length / 2)
 }
console.log(firstHalf("hello"))
console.log(firstHalf("Hello World"))

function secondHalf(str){
    return str.slice(str.length /2)
}
console.log(secondHalf("Hello"))

function capAndLow(str) {
     //var upperHalf = firstHalf(str).toUpperCase;
     var firHalf = str.slice(0, str.length / 2) 
     var secHalf = str.slice(str.length / 2)
     var upper = firHalf.toUpperCase()
     var lower = secHalf.toLowerCase()
     return upper + lower
     //var lowerHalf = secondHalf(str).toLowerCase;
     //return upperHalf.concat(lowerHalf);
}
console.log(capAndLow("hello World"))
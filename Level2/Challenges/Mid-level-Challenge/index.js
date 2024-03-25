function sortNumbers(numbers) {
   return numbers.sort((a, b) => a - b)
    }

const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);

function convertToUppercase(strings) {
    return strings.map(function (str){
        const string = str.slice(0, str.length)
        const upper = string.toUpperCase()
        return upper
    })
    }

const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings); 

const numArr = [3, 4, 5]
let numArr2 = numArr.reduce ((final, curr) => final += curr, 0)
console.log(numArr2)
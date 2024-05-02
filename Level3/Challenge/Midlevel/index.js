
// function solution(a) {
//     const posNum = a.filter(num => num > 0)
//     const sortedPosNum = posNum.sort((a, b) =>a - b)
//     // Use map to create a new array with sorted values and original -1 positions
//     const result = a.map(num =>  num === -1 ? -1 : sortedPosNum.shift())
//     return result
// }

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))



// const input = 'Counting Vowels'
// //const input = 'Hello World!'
// function countVowels(input){
//     const vowels = ['a','A','e','E','i','I','o','O','u','U'] 
//     const vowelCount= input.split("").reduce((count, char) =>{
//         if (vowels.includes(char)){
//             return count + 1
//         }
//         return count
//     }, 0); 
//     return vowelCount      
//      }
   

// console.log(countVowels(input))

// // Write a JavaScript function called **`findSumOfTwo`** that takes
// //in an array of numbers and a target number. The function should find
// //two numbers in the array that add up to the target number and return
// //them as an array. If there are multiple pairs that satisfy the condition,
// //return any one of them. If no such pair exists, return an empty array.

// // Implement the **`findSumOfTwo`** function using either the provide
// // example solutions or your own solution.

// function findSumOfTwo(numbers, target) {
//  for (i = 0; i < numbers.length; i++){
//     for ( j =i+1; j < numbers.length; j++){
//         if(numbers[i] + numbers [j] === target){
//             return [numbers[i], numbers[j]]
//         }
//     }
//  }
//  return []
// }

// console.log(findSumOfTwo([2, 4, 7, 11, 15], 91)); // Output: [2, 7]

// console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]



const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = []

arr3.push(...arr1,...arr2)

console.log(arr3)
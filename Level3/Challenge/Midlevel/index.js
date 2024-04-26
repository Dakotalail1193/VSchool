
function solution(a) {
    const posNum = a.filter(num => num > 0)
    const sortedPosNum = posNum.sort()
    // Use map to create a new array with sorted values and original -1 positions
    const result = a.map(num => (num === -1 ? -1 : sortedPosNum.shift()))
    return result
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))



const input = 'Counting Vowels'
//const input = 'Hello World!'
function countVowels(input){
    const vowels = ['a','A','e','E','i','I','o','O','u','U'] 
    const vowelCount= input.split("").reduce((count, char) =>{
        if (vowels.includes(char)){
            return count + 1
        }
        return count
    }, 0); 
    return vowelCount      
     }
   

console.log(countVowels(input))




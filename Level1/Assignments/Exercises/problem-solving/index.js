function largest(arr)  {   
    let max = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
        max = arr[i]        
    }
    return max

}
console.log(largest([6, 13, 250, 3])) 
console.log(largest([3, 5, 2, 8, 1]))
console.log(largest([-13, 40, 3, 0, 19, 22])) 

function lettersWithStrings(arr, str){
    let answer = [];
    
    for (i = 0; i < arr.length; i++){
        if (arr[i].includes(str))
        answer.push(arr[i])
    }
    return answer
}
    

console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"))
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))

function isDivisible (num1, num2) {
    if (num1 % num2 === 0){
        return true
    } else{
        return false
    }
}
console.log(isDivisible(4, 2))
console.log(isDivisible(9, 3))
console.log(isDivisible(15, 4))
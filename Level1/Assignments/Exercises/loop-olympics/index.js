//for (var i = 0; i <= 10; i++) {
//    console.log(i)
//}

//for (var i = 10; i >= 0; i--){
//  console.log(i)
//}

//const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
//for (var i = 0; i < fruit.length; i++){
//    console.log(fruit[i])
//}

 
//    var count = []
//    for ( var i = 0; i <= 10; i ++){
//        count.push(i);
//    }
//console.log(count)

    
//var number = []
//for (var i = 0; i <= 100; i++){
//    number.push(i);
//}

//var even = []
//for (var i = 0; i <= number.length; i++){
//    if (number[i] % 2 === 0){
//        even.push(i);
//    }
//}
//console.log(even)

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var otherFruit =[]
for (var i = 0; i <= fruit.length; i++){  
    if (fruit[i] === fruit[0])
    otherFruit.push(fruit[0],fruit[2],fruit[4])
    
}

console.log(otherFruit)
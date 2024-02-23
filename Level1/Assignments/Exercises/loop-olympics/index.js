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

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"],
    remove = [0,2,4];

for (var i = remove.length - 1; i >= 0; i--){  
   fruit.splice(remove[i],1);
    
    console.log(fruit)
}


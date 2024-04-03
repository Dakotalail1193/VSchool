function doublenumbers(arr){
    return arr.map(num => {
        return num * 2
    })

}
console.log(doublenumbers([2, 5, 100]));

function stringItUp(arr){
    return arr.map(String)
}
console.log(stringItUp([2, 5, 100]))

function capitalizeNames(arr){
    return arr.map(function (str){
        const firstLetter = str.slice(0, 1)
        const after = str.slice(1, str.length)
        const upper = firstLetter.toUpperCase()
        const lower = after.toLowerCase()
        return upper + lower
    })
    
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

function namesOnly(arr){
    return arr.map(arr => {
        return arr.name
    })
}
console.log(namesOnly([
    { name: "Angelina Jolie", age: 80},
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kayne West", age: 16},
    { name: "Bob Ziroll", age: 100}
]));

function makeStrings(arr){
    return arr.map(arr => {
        if (arr.age >= 18) {
            return arr.name + "can go to The Matrix"
        } else {
            return arr.name + " is under age!!"
        }
    })
}
console.log(makeStrings([
    { name: "Angelina Jolie", age: 80},
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kayne West", age: 16},
    { name: "Bob Ziroll", age: 100}
]));

function readyToPutInTheDOM(arr){
    return arr.map(arr => {
        return "<h1>" + arr.name + "</h1>" + "<h2>" + arr.age + "</h2>"        
        
    })
}
console.log(readyToPutInTheDOM([
    { name: "Angelina Jolie", age: 80},
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kayne West", age: 16},
    { name: "Bob Ziroll", age: 100}
]));

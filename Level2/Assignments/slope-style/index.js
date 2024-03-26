function collectAnimals(...animals) {
    console.log(animals)
}

let animals = collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

function combineFruit(fruit, sweets, vegetables){
    return{fruit, sweets, vegetables}
}
let result= combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
console.log(result)

function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
 console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }));
  


  function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav},  ${secondFav }, and  ${thirdFav}`;
}
console.log(returnFavorites(favoriteActivities))

function combineAnimals() {
console.log([...realAnimals, ...magicalAnimals, ...mysteriousAnimals])
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

function product(...numbers) {
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce((acc, number) => acc * number, 1)
  }

  function unshift(array, ...array2) {
    return [...array, ...array2];
  }
  
  
  function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        let [firstName, lastName] = name
        return {firstName, lastName}
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

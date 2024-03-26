const ownerName = "John"
const ownerAge = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let petName;
        if (pets[i] === "cat") {
            petName = "fluffy"
        } else {
            petName = "spot"
        }
        console.log("pet name: ", petName)
        pet.name = petName
        petObjects.push(pet)
    }
    console.log("man name: ", ownerName)
    return petObjects
}

runForLoop(["cat", "dog"]);

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr){
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))

const person= [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}
console.log(filterForFriendly(person))

//  doMathSum(a, b  =>  a + b)


// let produceProduct = (a, b => a * b)


    const firstName = "Jane"
    const lastName = "Doe"
    const age = 100


function question(firstName ="Jane", lastName ="Doe", age=100){
    
     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`}

console.log(question("Kat", "Stark", 40))


const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => animal.type === "dog")
 }
 console.log(filterForDogs(animals))

function welcome(location, name1){
  return   `Hi ${name1}!
Welcome to ${location} 
I hope you enjoy your stay. Please ask the President of ${location} if you need anything.`;}

console.log(welcome("Hawaii", "Janice"))
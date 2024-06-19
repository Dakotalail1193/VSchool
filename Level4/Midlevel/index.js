function filterAnagrams(arr, target) {

    let anagrams = []

    arr.forEach((word) => {

        if (arr.length === target.length){

            const answer1 = word.split("").sort().join("");
            const answer2 = target.split("").sort().join("");

            if (answer1 === answer2){
                anagrams.push(word)
            }
        }
        //console.log(answer1, answer2)
    })
    return anagrams;
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';




const anagrams = filterAnagrams(words, target);
console.log(anagrams);

function sortByMultipleCriteria(people) {

    const newList = people.sort((a, b)=>  a.age - b.age); 
    const sortedPeople= newList.sort((a,b) => a.name - b.name);
    return sortedPeople    
}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);




function calculateTotalPrice(products) {
  

  const newArray = products.map((product) => ({
    name: product.name,
    totalPrice:  product.price * product.quantity
    
  }))
return newArray
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]
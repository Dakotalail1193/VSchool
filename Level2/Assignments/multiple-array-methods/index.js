var peopleArray = [
    {firstName: "Sarah", lastName: "Palin",   age: 47},
    {firstName: "Frank", lastName: "Zappa",   age: 12},
    {firstName: "Rick",  lastName: "Sanchez", age: 78},
    {firstName: "Morty", lastName: "Smith",   age: 29},
    {firstName: "Kyle",  lastName: "Mooney",  age: 27},
    {firstName: "Pasha", lastName: "Datsyuk", age: 13},
    {firstName: "Lev",   lastName: "Tolstoy", age: 82}
]

function sortedOfAge(arr){
    const sorted = arr.sort((a,b) => (a.lastName > b.lastName) ?1: ((b.lastName > a.lastName) ? -1 : 0)); 
   const age = sorted.filter(sorted => sorted.age >= 18)   
   const readyForDom = age.map( age => {return "<li>" + age.firstName + " " + age.lastName + " " + "is" + " " + age.age + "</li>"})
   return readyForDom
}
 console.log(sortedOfAge(peopleArray));
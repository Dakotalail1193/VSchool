function extractUniqueCharacters(strings) {
   
  let uniqueChars = [];   //array for result

 strings.forEach((string) => {  //looping over each string
    for ( let i = 0; i < string.length; i++){ //looping over each character
        if(!uniqueChars.includes(string[i])){ //if the unique character is NOT included in array yet, push to array
            uniqueChars.push(string[i])
        }
    }    
 });
 return uniqueChars;
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); 







function sortByProperty(objects, propertyName) {
  if(typeof objects[0].propertyName === "string"){ //looks for number or string
    return objects.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

} else(typeof objects[0].propertyName === 'number')
    return objects.sort((a, b) => a[propertyName] - b[propertyName])

}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'name');
console.log(sortedByAge);
function extractInitials(names) {
  const initials = names.map((string) =>{
    const names = string.split(' ')   
    firstInitial = names[0].substring(0, 1)
    lastInitial = names[names.length - 1].substring(0, 1)    
    return firstInitial + lastInitial
  })
  return initials
};

const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray);


function filterByProperty(objects, propertyName, propertyValue) {
  return objects.filter(obj => obj[propertyName] === propertyValue)
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);



// Write a function called createTable(rows, columns) that takes two parameters: rows (number of rows) and columns (number of columns). The function should generate a table represented as an array of arrays, where each inner array represents a row and contains the row's data. Each cell in the table should contain the product of its row index and column index.
function createTable(rows, columns) {
  const result = []
  for (i=0; i < rows; i++){
    const arr = []
    result.push(arr)
    for (j=0; j < columns; j++){
     arr.push(i*j)
    }
  }
  return result
}

// Test the function with different values
const table1 = createTable(3, 4);
console.log(table1);

/* Expected Outcome:
[
  [0, 0, 0, 0],
  [0, 1, 2, 3],
  [0, 2, 4, 6]
]
 */

const table2 = createTable(5, 5);
console.log(table2);
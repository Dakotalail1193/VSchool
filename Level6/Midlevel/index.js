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
function fiveAndGreaterOnly(arr) {
    return arr.filter(function (num){
        if (num >= 5){
            return true
        }
    })
  }
  
  console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

  function evensOnly(arr) {
    return arr.filter(function (num){
        if (num % 2 === 0){
            return true
        }
    })
  }
   console.log(evensOnly([3, 6, 8, 2]));

   function fiveCharactersOrFewerOnly(arr) {
    return arr.filter (function (str){
        if (str.length <= 5)
        return true
    })
  }
  
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); 

  function peopleWhoBelongToTheIlluminati(arr){
   return arr.filter (arr => arr.member === true)
  }
  
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));

  function ofAge(arr){
    return arr.filter (arr => arr.age >= 18)
  }
  
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
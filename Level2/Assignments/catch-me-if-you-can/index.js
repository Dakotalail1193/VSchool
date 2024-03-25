function sum(x, y){
    
    try {
        if (isNaN(x) || isNaN(y)){
            throw "Value Must Be a Number";
        }  else (console.log("Finished"));
        
    } catch(err) {
        console.log(err)
     } 
    return x + y
  } 
console.log(sum(1, 3))


  try{
    sum(1, 2)
  }

  catch(err) {
    console.log(sum(1,a));
    console.log(err)
  }

  const user = {username:"sam", password: "123abc"};
  function login(username, password){
    try {

        if(username != "sam" || password != "123abc"){
            throw "Username or Password is incorrect."
        }else return (console.log("Login Succseful!"));
    } catch(err) {
console.log(err)
    }
  }
login("sam", "123abc")









//   try{
//     login("sam", "123abc")
//   }
//   catch(err){
//     console.log(err)
//   }

//   try{
//     login("sam", "123abb")
//   }
//   catch(err){
// console.log(err)
//   }
  



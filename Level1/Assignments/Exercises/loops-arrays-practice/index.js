var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        console.log(officeItems[i])
    }
}

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log("old enough")
    } else{
        console.log ("not old enough")
    }
  }

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18){
     }  if  (peopleWhoWantToSeeMadMaxFuryRoad[i].name === "Mike") {
    console.log("Mike is not old enough to see Mad Max")
    }   if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
        console.log("Mike is not old enough to see Mad Max Fury Road, do not let HIM in.")
    }
}

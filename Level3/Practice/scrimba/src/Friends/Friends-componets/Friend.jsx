import React from "react";
import Pets from "./Pets";
import FriendsList from "./FriendList";
import friends from "../friendsData";

// export default function Friend(){
//     const petElements = FriendsList.friendElements.map(pet, index =>{
//         return <Pets name={pet.pets.name} />
//     })
    
//     return(
//         <div>
//             <h1>Name: {props.name}</h1>
//             <h1>Age: {props.age}</h1>
//             {petElements}
//         </div>
//     )
// }

export default function Friend(props) {
    return (
      <div className="friend">
        <h2>Friend Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        {props.pets.map((pet, index) => (
          <Pets key={index} name={pet.name} breed={pet.breed} />
        ))}
      </div>
    );
  }
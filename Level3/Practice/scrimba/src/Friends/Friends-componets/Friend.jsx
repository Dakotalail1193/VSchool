import React from "react";
import Pets from "./Pets";
import FriendsList from "./FriendList";
import friends from "../friendsData";

export default function Friend({name,age, pets}) {
  
    return (
      <div className="friend">
        <h2>Friend Name: {name}</h2>
        <h2>Age: {age}</h2>
        <hr className="line"/>
        {pets.map((pet, index) => (
          <Pets key={index} name={pet.name} breed={pet.breed} />
        ))}
      </div>
    );
  }
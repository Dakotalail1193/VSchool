import React from "react";
import Pets from "./Pets";
import FriendsList from "./FriendList";
import friends from "../friendsData";

export default function Friend(props) {
    return (
      <div className="friend">
        <h2>Friend Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        <hr className="line"/>
        {props.pets.map((pet, index) => (
          <Pets key={index} name={pet.name} breed={pet.breed} />
        ))}
      </div>
    );
  }
import React from "react";
import Friend from "./Friend";
import friends from "../friendsData";




export default function FriendsList() {
    return (
      <div className="friend-list">
        {friends.map((friend, index) => (
          <Friend
            key={index}
            name={friend.name}
            age={friend.age}
            pets={friend.pets}
          />
        ))}
      </div>
    );
  }
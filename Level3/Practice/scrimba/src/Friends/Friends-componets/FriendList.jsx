import React from "react";
import Friend from "./Friend";
import friends from "../friendsData";




export default function FriendsList() {
    return (
      <div className="friend-list">
        {friends.map((friend, index) => (
          <Friend
            key={index}
            {
              ...friend
            }
          />
        ))}
      </div>
    );
  }
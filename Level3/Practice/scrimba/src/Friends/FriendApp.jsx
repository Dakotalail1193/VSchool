import React from "react";
import Friend from './Friends-componets/Friend.jsx'
import FriendsList from "./Friends-componets/FriendList.jsx";
import './FriendApp.css'


export default function App() {
    return (
        <div>
            <FriendsList  classname="friend-block"/>
        </div>
    )
}

import React from "react";
import Friend from "./Friend"
import data from "../data"
import Pet from "./Pet"


export default function FriendList(){
    const friends = data.map((friend, index) => <Friend name={friend.name} age={friend.age} pets={friend.pets} key={index}/>)
    return(
        <div>
        {friends}
        </div>

    )
}
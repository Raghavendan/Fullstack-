import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { database } from "./Firebaseconfig.js";
import './App.css';
function Amazon(){
    const history = useNavigate();

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
    return(
        <div>
            <h2  className="App">Home</h2>
            <button className="btn" onClick={handleClick}>signOut</button>
        </div>
    )
}
export default Amazon;

import React from "react";
import Navbar from "./Navbar";
import log1 from "../img/logo192.png"
import './navbar.css';
export default function Cardbox({props}){
    return(
        <div className="card">
            <div className="card-head">
            <h3 id="card">{props.id}</h3>
            <img src={log1} alt="logo"/>
            </div>
            
            <p id="title">{props.title}</p>
            <h4 id="tag">{props.tag}</h4>
        </div>
    );
};
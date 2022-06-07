import React from "react";
import Photo from "./img/WhatsApp Image 2022-05-14 at 10.22.58 PM.jpeg"
import "./App.css"
export default function Info()
{
    return(
        <div className="container">

        <img src={Photo}alt="Pic" />
        <h1 className="name">Shaheer Shahid</h1>
        <h1 className="label">FrontEnd Developer</h1>
        <br />
        <h1 className="label-1">Khattak.website</h1>
       
        <div className="btn">
            <button className="Email-btn" type="button" > Email</button>
            <button className="Link-btn">LinkedIn</button>
        </div>
        
        </div>
        

    )
}
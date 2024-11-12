import React from "react";
import { Link } from "react-router-dom";

export  default function QuickLink(){
    return(
        <div>
           <h4>Quick Links</h4>
            <ul>
                <li><Link to="/Hero">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                
            </ul>
        </div>
    )
}
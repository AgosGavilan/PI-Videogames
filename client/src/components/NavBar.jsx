import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav>
                <div>
                    <span><NavLink to={'/home'}>Home </NavLink></span>
                    <span><NavLink to={'/create'}> Create</NavLink></span>
                </div>
            </nav>
        </div>
    )
}
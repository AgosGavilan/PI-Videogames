import React from "react";
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to the Videogames's API</h1>
            <Link to='/home'>
                <button>INGRESAR</button>
            </Link>
        </div>
    )

}

export default LandingPage
import React from "react";
import Funcionalidades from './Funcionalidades'
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import { Videogames } from "./Videogames";

export default function Home () {



    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <Funcionalidades />
            </div>























            <div>
                <Videogames />
            </div>
        </div>
    )
}
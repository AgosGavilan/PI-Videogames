import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Funcionalidades from './Funcionalidades'
import NavBar from "./NavBar";
import { Videogames } from "./Videogames";
import Paginado from './Paginado';
import { filterByGenres, filterBySource, orderBy, getAllVideogames } from "../redux/actions";

export default function Home () {
    const allGames = useSelector(state => state.allVideogames)

    const [currentPage, setCurrentPage] = useState(1) //lo seteo en 1 porque siempre arranco por la primer pagina
    const gamesPerPage = 15//cantidad de juegos que debe haber por pagina
    const indexOfLastGame = currentPage * gamesPerPage // 1 * 15 = 15
    const indexOfFirstGame= indexOfLastGame - gamesPerPage // 15 - 15 = 0
    const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame) //para dividir la cantidad de juegos por pagina

    const dispatch = useDispatch()

    const paginado = (pageNumber) => { //establece el numero de pagina
        setCurrentPage(pageNumber)
    }
    //const paginado = (5) => {
        //setCurrentPage(5)
    //}


    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage])

    function handleSort(e) {
        e.preventDefault()
        if(e.target.value === '') {
            dispatch(getAllVideogames())
        } else {
            dispatch(orderBy(e.target.value))
            setCurrentPage(1)
        }
    }

    function handleFilter(e) {
        e.preventDefault()
        if(e.target.value === '') {
            dispatch(getAllVideogames())
        } else {
            dispatch(filterByGenres(e.target.value))
            setCurrentPage(1)
        }
    }

    function handleSource(e) {
        e.preventDefault()
        if(e.target.value === '') {
            dispatch(getAllVideogames())
        } else {
            dispatch(filterBySource(e.target.value))
            setCurrentPage(1)
        }
    }

    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <Funcionalidades handleSort={handleSort} handleFilter={handleFilter} handleSource={handleSource}/>
            </div>
            <div>
                <Videogames currentGames={currentGames}/> {/*porcion de juegos que se van a renderizar por pagina*/}
            </div>
            <div>
                <Paginado 
                gamesPerPage={gamesPerPage} 
                allGames={allGames.length} 
                paginado={paginado} />
            </div>
        </div>
    )
}
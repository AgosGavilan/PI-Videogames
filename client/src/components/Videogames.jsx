import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../redux/actions";
import img from '../imagenes/default.png'
import CardVideogame from "./CardVideogame";

export const Videogames = () => {

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getAllVideogames()) //me traigo la action creators q me trae todos mis videojuegos de la API
    }, [])

    const allVideogames = useSelector(state => state.allVideogames) //me traigo del reducer el estado en donde guarde todos mis videojuegos


    return (
        <div>
            {allVideogames && allVideogames.map(v => {
                return (<CardVideogame
                key={v.id}
                id={v.id}
                image={v.image ? v.image : img}
                name={v.name}
                genres={v.genres && v.genres.join(', ')}
                rating={v.rating}
                />)
            })}

        </div>
    )
}
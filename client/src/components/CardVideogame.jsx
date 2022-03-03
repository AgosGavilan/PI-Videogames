import React from "react";
import { Link } from "react-router-dom";

const CardVideogame = ({name, image, genres, id, rating}) => {
    return (
        <div>
            <img src={image} alt='' width="400px" height="250px" />
            <h3>{name}</h3>
            <p>Genres: {genres}</p>
            <p>Rating: {rating}</p>
            <Link to={`/detail/${id}`}>Leer más</Link>
        </div>
    )
}

export default CardVideogame
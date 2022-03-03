import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogame } from "../redux/actions";
import { Link } from "react-router-dom";

function Detail() {

    const {id} = useParams()

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getVideogame(id))
    }, [])

    const details = useSelector(state => state.videogame)
    console.log(details)

    return(
        <div>
            <img src={details.image} alt={`${details.name}'s`} width="400px" height="250px" />
            <p>ID: {details.id}</p>
            <p>Name: {details.name}</p>
            <p>Genres: {details.genres?.join(', ')}</p>
            <p>Description: {details.description}</p>
            <p>Released: {details.released}</p>
            <p>Rating: {details.rating} ★</p>
            <p>Platforms: {details.platforms?.join(', ')}</p>
            <div>
                <Link to={'/home'}>
                    <button>Back Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Detail
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByGenres, filterBySource, getAllVideogames, getByGenres, orderBy } from "../redux/actions";



const Funcionalidades = () => {

    const dispatch = useDispatch()
    const generos = useSelector(state => state.genres)
    //console.log(generos)

    useEffect(() => {
        dispatch(getByGenres())
        dispatch(getAllVideogames())
    }, [dispatch])

    function handleSort(e) {
        dispatch(orderBy(e.target.value))
    }

    function handleFilter(e) {
        dispatch(filterByGenres(e.target.value))
    }

    function handleSource(e) {
        dispatch(filterBySource(e.target.value))
    }

    return (
        <div>
            <div>
                <label>Order by:    </label>
                    <select onChange={e => handleSort(e)}>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="RatingAsc">Rating Asc</option>
                        <option value="RatingDesc">Rating Desc</option>
                    </select>
                <label>Genres: </label>
                    <select id="genre" onChange={e => handleFilter(e)}>
                        <option>Select Genre...</option>
                        {generos && generos.map(g => {
                            return (
                                <option key={g.id} value={g.name}>{g.name}</option>
                            )
                        })}
                    </select>
                <label>Source:   </label>
                    <select onChange={e => handleSource(e)}>
                        <option value="">Select Source</option>
                        <option value='all'>All</option>
                        <option value="api">API</option>
                        <option value="crated">Created</option>
                    </select>
            </div>

        </div>
    )
}

export default Funcionalidades
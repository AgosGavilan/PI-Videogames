import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getNames } from '../redux/actions'

export default function SearchBar () {
    const [state, setState] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNames(state))
    }, [state])

    function handleChange(e) {
        setState(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNames(state))
        //setState('') //para limpiar mi busqueda
    }


    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label htmlFor="name"></label>
                    <input 
                        type="search"
                        id="name"
                        autoComplete="off"
                        value={state}
                        placeholder='Name...'
                        onChange={e => handleChange(e)}
                        />
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}
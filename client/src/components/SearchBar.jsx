import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getNames } from '../redux/actions'
import s from '../style/SearchBar.module.css'
import lupa from '../imagenes/pixlr-bg-result.png'
import Loading from './Loading'

export default function SearchBar () {
    const [state, setState] = useState('')
    const [carga, setCarga] = useState(false);

    const dispatch = useDispatch()

    function handleChange(e) {
        e.preventDefault()
        setState(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCarga(true)
            dispatch(getNames(state))
            setCarga(false)
        setState('') //para limpiar mi busqueda
        
    }

    if(carga) {
        return <Loading />
    }

    
    return(
        <div className={s.box}>
            <form onSubmit={e => handleSubmit(e)}>
                <div className={s.buscar}>
                    <span htmlFor="name"></span>
                    <input 
                        //type="search"
                        type='text'
                        id="name"
                        autoComplete="off"
                        value={state}
                        placeholder='Buscar videojuego'
                        onChange={e => handleChange(e)}
                    />
                    <button type="submit" className={s.btn}><img src={lupa}/></button>
                </div>
            </form>
        </div>
    )
}
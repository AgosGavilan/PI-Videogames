import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getNames } from '../redux/actions'
import s from '../style/SearchBar.module.css'
import lupa from '../imagenes/pixlr-bg-result.png'
//import Loading from './Loading'


export default function SearchBar () {
    const [state, setState] = useState('') //me creo un estado local cuyo valor incial es vacio
    const dispatch = useDispatch()

    function handleChange(e) { //cada vez que escriba algo en la barra de busqueda
        e.preventDefault()
        setState(e.target.value) //a mi estado incial lo seteo con el valor que voy ingresando en mi busqueda
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(state.length > 1) { //si escribo algo en mi barra de busqueda
            dispatch(getNames(state))
            setState('') //para limpiar mi busqueda
        } else {
            alert('No ingreso nada en la busqueda')
        }
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
                    <button type="submit" className={s.btn}><img src={lupa} alt='lupa'/></button>
                </div>
            </form>
        </div>
    )
}
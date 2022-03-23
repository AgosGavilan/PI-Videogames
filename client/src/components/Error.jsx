import React from 'react'
import i from '../imagenes/kirby_sad_by_lisuplaygames_dazwi2p-fullview.png'
import s from '../style/Error.module.css'

export default function Error () {

    return (
        <div className={s.kirby}>
            <h1>No se encontraron videojuegos</h1>
            <img src={i} alt='kirby' />
        </div>
    )
}
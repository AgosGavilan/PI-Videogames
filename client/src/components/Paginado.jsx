import React from "react";
import s from '../style/Paginacion.module.css'


const Paginado = ({gamesPerPage, allGames, paginado}) => {

    const pageNumber = []

    for(let i = 1; i <= Math.ceil(allGames/gamesPerPage); i++) {   //el Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
        //i <= 100/15 = 6.66 => Math.ceil(6.66) = 7 => 1 <= 7
        pageNumber.push(i)
    }
    return (
        <nav>
            <div className={s.paginacion}>
                {pageNumber && pageNumber.map(number => ( //si en pageNumber hay algo mapealo
                    <span key={number}>
                        <button className={s.btn} onClick={() => paginado(number)}>{number}</button> {/* y por cada elemento renderizame un boton y agregales un evento onClick, el cual establecera el numero de pagina en el que me encuentro*/}
                    </span>
                ))}
            </div>
        </nav>
    )
}




export default Paginado

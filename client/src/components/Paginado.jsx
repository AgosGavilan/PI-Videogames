import React from "react";
import s from '../style/Paginacion.module.css'


const Paginado = ({gamesPerPage, allGames, paginado}) => {

    const pageNumber = []

    for(let i = 1; i <= Math.ceil(allGames/gamesPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <nav>
            <div className={s.paginacion}>
                {pageNumber && pageNumber.map(number => (
                    <span key={number}>
                        <button className={s.btn} onClick={() => paginado(number)}>{number}</button>
                    </span>
                ))}
            </div>
        </nav>
    )
}




export default Paginado

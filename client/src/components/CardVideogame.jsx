import React from "react";
import s from '../style/CardVideogame.module.css'
import { NavLink } from "react-router-dom";

const CardVideogame = ({name, image, genres, id, rating}) => {
    return (
        // <div className={s.card}>
        //     <NavLink to={`/detail/${id}`} className={s.navLink}>
        //         <h3 className={s.nombre}>{name}</h3>
        //         <img src={image} alt='' width="400px" height="250px" />
        //         {/* <div className={s.info}> */}
        //             <p className={s.genres}>{genres}</p>
        //             <p className={s.rating}>★ {rating}</p>
        //         {/* </div> */}
        //     </NavLink>
        // </div>

        <div className={s.card}>
            <img src={image} alt='' width="400px" height="250px" />
            <div className={s.card__content}>
                <h3 className={s.nombre}>{name}</h3>
                <p className={s.genres}>{genres}</p>
                <p className={s.rating}>⭐ {rating}</p>
                <NavLink to={`/detail/${id}`} className={s.navLink}><span className={s.leer_mas}>Leer más</span></NavLink>
            </div>
        </div>
    )
}

export default CardVideogame
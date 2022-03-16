import React from "react";
import { Link } from 'react-router-dom'
import s from '../style/LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={s.full}>
            <div className={s.full_inner}>
                <div className={s.content}>
                    <h1 className={s.titulo}>Videogames APP</h1>
                    <Link to='/home'>
                        <button className={s.btn}>
                            <span className={s.span1}></span>
                            <span className={s.span2}></span>
                            <span className={s.span3}></span>
                            <span className={s.span4}></span>
                            <span className={s.ingresar}>INGRESAR</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default LandingPage
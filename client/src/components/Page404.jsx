import React from "react";
import error from '../imagenes/c09a97a8f18cb8908ea897639cbe4fa8.gif'
import { NavLink } from 'react-router-dom'
import s from '../style/Page404.module.css'

export default class Page404 extends React.Component {
    render() {
        return (
            <div>
                <h1 className={s.titulo}>ERROR 404: Page not found</h1>
                <img src={error} alt="error" />
                <h2 className={s.pregunta}>¿Desea volver a Home?</h2>
                <div className={s.mini_box}>
                    <NavLink to={'/home'} className={s.nav}><span className={s.opcion}>SI</span></NavLink>
                    <NavLink to={'/'} className={s.nav}><span className={s.opcion}>NO</span></NavLink>
                </div>

            </div>
        )

    }
}
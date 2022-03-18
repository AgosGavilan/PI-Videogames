import React from 'react'
import loading from '../imagenes/cargando-unscreen.gif'
import s from '../style/Loading.module.css'

export default function PaginaDeCarga() {
    return (
          <div className={s.box_loading}>
            <img src={loading} alt="" />
          </div>
    )}
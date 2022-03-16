import React from 'react'
import loading from '../imagenes/1-r4K1PRHfbKG7NpoRx22K4A-unscreen.gif'
import s from '../style/Loading.module.css'

export default function PaginaDeCarga() {
    return (
          <div className={s.box_loading}>
            <img src={loading} alt="" />
          </div>
    )}
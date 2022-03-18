import React from "react";
import { useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { getNames } from '../redux/actions'
import s from '../style/SearchBar.module.css'
import lupa from '../imagenes/pixlr-bg-result.png'

export default function SearchBar () {
    const [state, setState] = useState('')

    const dispatch = useDispatch()

    function handleChange(e) {
        e.preventDefault()
        setState(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(state.length > 1) {
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
                    <button type="submit" className={s.btn}><img src={lupa}/></button>
                </div>
            </form>
        </div>
    )
}


// export class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: ''
//         };
//     }

//     handleChange (e) {
//         e.preventDefault()
//         this.setState({
//             name: e.target.value
//         })
//     }

//     handleSubmit (e) {
//         e.preventDefault()
//         this.props.agos(this.state.name)
//         this.setState('')
//     }

//     render () {
//         const {name} = this.state
//         return (
//             <div>
//                 <form onSubmit={e => this.handleSubmit(e)}>
//                 <div className={s.buscar}>
//                     <span htmlFor="name"></span>
//                     <input 
//                         //type="search"
//                         type='text'
//                         id="name"
//                         autoComplete="off"
//                         value={name}
//                         placeholder='Buscar videojuego'
//                         onChange={e => this.handleChange(e)}
//                     />
//                     <button type="submit" className={s.btn}><img src={lupa}/></button>
//                 </div>
//                 </form>
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) => { //las acciones que despacho aca, me llegan al componente como this.props
//     return {
//         agos: name => dispatch(getNames(name))
//     }
// }

// export default connect(null, mapDispatchToProps)(SearchBar)
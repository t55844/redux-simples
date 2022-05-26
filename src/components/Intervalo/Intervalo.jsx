import React from "react";
import './Intervalo.css';

import Card from '../Card/Card'
import { connect } from "react-redux";
import { alterarNumeroMaximo, alterarNumeroMinimo } from "../../store/actions/numeros";

const Intervalo = props=>{
    
    const{max, min} = props
    console.log(min)
    
    return(
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" 
                    value={min} onChange={e=>props.alteraMin(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number"
                    value={max} onChange={e=>props.alteraMax(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state =>{
    return {
        max:state.numeros.max,
        min:state.numeros.min
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        alteraMin(novoNumero){
            const action = alterarNumeroMinimo(novoNumero)
            console.log(novoNumero)
            dispatch(action)
        },
        alteraMax(novoNumero){
            const action = alterarNumeroMaximo(novoNumero)
            console.log(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Intervalo)
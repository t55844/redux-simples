import React from "react";
import './Intervalo.css';

import Card from '../Card/Card'
import { connect } from "react-redux";
import { alterarNumeroMinimo } from "../../store/actions/numeros";

const Intervalo = props=>{
    
    const{max, min} = props
    props.alteraMin(100)
    return(
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" 
                    value={min} onChange={'piu'}/>
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number"
                    value={max} onChange={'piu'}/>
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

const mapActionsToProps=(dispatch)=>{
    return{
        alteraMin(novoNumero){
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
    )(Intervalo)
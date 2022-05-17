import React from "react";
import { connect } from "react-redux";
import Card from "./Card/Card";


const Sorteio = props=>{
    const max = props.max
    const min = props.min
const aleatorio = (Math.random()*(max - min) +min).toFixed(0)
    return(
        <Card title="Sorteio dos Números" purple>
            <div>
                <span>Sorteio: </span>
                <strong>{aleatorio}</strong>
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

export default connect(mapStateToProps)(Sorteio)
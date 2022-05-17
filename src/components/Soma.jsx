import React from "react";
import { connect } from "react-redux";
import Card from "./Card/Card";


const Soma = props=>{
    return(
        <Card title="Soma dos Números" blue>
            <div>
                <span>Soma: </span>
                <strong>{props.max + props.min}</strong>
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

export default connect(mapStateToProps)(Soma)
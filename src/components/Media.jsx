import React from "react";
import Card from "./Card/Card";
import { connect } from "react-redux";


const Media = props=>{
    return(
        <Card title="Media dos Números" green>
            <div>
                <span>Media: </span>
                <strong>{(props.max + props.min) /2}</strong>
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

export default connect(mapStateToProps)(Media)
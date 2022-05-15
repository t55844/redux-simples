import React from "react";
import './Intervalo.css';

import Card from '../Card/Card'

export default props=>{
    return(
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" />
                </span>
            </div>
        </Card>
    )
}
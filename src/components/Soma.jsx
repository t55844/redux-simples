import React from "react";
import Card from "./Card/Card";


export default props=>{
    return(
        <Card title="Soma dos Números" blue>
            <div>
                <span>Soma: </span>
                <strong>{2}</strong>
            </div>
        </Card>
    )
}
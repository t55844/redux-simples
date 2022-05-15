import React from "react";
import Card from "./Card/Card";


export default props=>{
    return(
        <Card title="Media dos Números" green>
            <div>
                <span>Media: </span>
                <strong>{2}</strong>
            </div>
        </Card>
    )
}
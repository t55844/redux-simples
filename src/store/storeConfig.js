import { combineReducers, legacy_createStore } from "redux";
import numeros from "./reducers/numeros";

const reducers = combineReducers({
    numeros:numeros,
    nomes: function(state, action){
        console.log('Reducer Nomes')
        console.log(state,' ',action)
        return[
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig(){
    return legacy_createStore(reducers)
}

export default storeConfig
import { combineReducers, legacy_createStore } from "redux";

const reducers = combineReducers({
    numeros:function(state,action){
        console.log(state,' ',action)
        return{
            min:1,
            max:10
        }
    },
    nomes: function(state, action){
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
import { combineReducers, legacy_createStore } from "redux";

const reducers = combineReducers({
    numeros:function(state,action){
        console.log('Reducer Numeros')
        console.log(state,' ',action)
        switch(action.type){
            case 'NUM_MIN_ALTERADO':
                return{
                    ...state,
                    min:action.payload
                }
                default:
                    return {state}
        }
        return{
            min:5,
            max:10
        }
    },
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
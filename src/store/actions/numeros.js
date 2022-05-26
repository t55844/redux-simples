import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "./actionType"

export function alterarNumeroMinimo (numeroNovo){
    return{
        type:NUM_MIN_ALTERADO,
        payload:numeroNovo
    }
}
export function alterarNumeroMaximo (numeroNovo){
    return{
        type:NUM_MAX_ALTERADO,
        payload:numeroNovo
    }
}
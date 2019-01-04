import { FETCH_CUSTOMER } from '../actions/types';

const initialState = {
     customer: []
}

export default function(state = initialState, action) {
    // Por ahora, no maneja ninguna acción
    // y solo devuelve el estado que recibimos.
    switch(action.type) {
        case FETCH_CUSTOMER:
             return {
                  ...state,
                  customer: action.payload
             }
        default:
             return state;
   }
  }
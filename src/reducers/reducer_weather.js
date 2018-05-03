import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){

    switch(action.type){
        case FETCH_WEATHER:
            //Do not mutate state with .push.  Return a new state using .concat
            //return state.concat([action.payload.data]);
            
            return [action.payload.data, ...state]; //ES6 concatnation to make a new array
    }
    return state;
}
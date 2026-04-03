import { useReducer } from "react";
import {intialCounterState} from './reducerStore';

// var intialState = {counter: 10};

function reducer(state, action) {
    console.log(state)
    switch(action.type) {
        case 'inc':
            return {counter: state.counter + 1};
        case 'dec':
            return {counter: state.counter - 1};
    }   
}


export default function IncrementerDecrementer() {
    console.log(useReducer(reducer, intialCounterState))
    const [state, dispatcher] = useReducer(reducer, intialCounterState);
    
    return (
        <>
            <b>{state.counter}</b>
            <button onClick={() => {dispatcher({type: 'inc'})}}>+</button>
            <button onClick={() => {dispatcher({type: 'dec'})}}>-</button>
        </>
    )
}
import {useCounterHook} from './counterCustomHook';

export default function PlusAndMinus() {
    var {counter, increment, decrement} = useCounterHook({intialValue: 0});
    return (
        <>
            <b>{counter}</b>
            <button className="btn btn-success" onClick={increment}>+</button>
            <button className="btn btn-danger" onClick={decrement}>-</button>
        </>
    )
}
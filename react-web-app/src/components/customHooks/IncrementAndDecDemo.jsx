import { useCounterHook } from './counterCustomHook'

export default function IncDecComp() {
    var {counter, increment, decrement} = useCounterHook({intialValue: 10});
    return (
        <>
            Counter - {counter} 
            <hr />
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button className="btn btn-danger" onClick={decrement}>Decrement</button>
        </>
    )
}
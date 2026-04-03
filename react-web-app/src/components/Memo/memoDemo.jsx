import  { useState } from "react";
import Child from './Child';



export default function MemoDemo() {
    const [counter, setCounter] = useState(0);
    const [diffValue, setDiffValue] = useState(0);
    return (
        <div>
            <div>Count Value - {counter}</div>
            <Child value={counter}></Child>  
            <hr />
            <div>Diff value Value - {diffValue}</div> 
            <Child value={diffValue}></Child> 
            <hr />
            <button onClick={() => {setCounter(counter + 1)}}>Inc Count</button>
            <button onClick={() => {setDiffValue(diffValue + 1)}}>Inc Diff value</button>
        </div>
    )
}




import { useDispatch } from "react-redux";
import {increment}  from './../slice';
export default function Component3() {
    var dispatcher = useDispatch();
    function handleClick() {
        dispatcher(increment());
    }
    return (
        <>
            Component 3 - 
            <button onClick={handleClick}>Increment Value</button>
        </>
    )
}
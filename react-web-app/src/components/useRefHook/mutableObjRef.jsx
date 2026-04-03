
import { useEffect, useState, useRef } from "react";
export default function MutableObjRef() {
    const [counter, setCounter] = useState(0);
    var counterRef = useRef(null);
    const [crrntDate, setCurrentDate] = useState(new Date().toLocaleTimeString());
    

    console.log(counterRef)

    useEffect(() => {   
        // mounting logic
        return (() => {
            clearInterval(counterRef.current);  // unmounting logic | cleanup function
        }) 
        
    }, []);

    const handleStartTimer = () => {
        counterRef.current = setInterval(() => {
            setCounter(prevCount => prevCount + 1);
            // console.log("Counter value:", counter);
        }, 1000);        

        setInterval(() => {
            setCurrentDate(new Date().toLocaleTimeString());
        }, 1000);
    }
    

    const handleStopTimer = () => {
        clearInterval(counterRef.current);
    }

    return (
        <>
            use REF
            <b>{crrntDate}</b>
            <button onClick={handleStartTimer}>Start</button>
            <button onClick={handleStopTimer}>Stop</button>
            <div>{counter}</div>
        </>
    )
}
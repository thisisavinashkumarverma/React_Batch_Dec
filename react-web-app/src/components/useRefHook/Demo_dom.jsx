import React, { useRef } from 'react';

export default function Demo_dom() {
    const nameEleRef = useRef(null);
    const ageEleRef = useRef(null);
    function handleFocus() {
        nameEleRef.current.focus();
    }

    function handleReset() {
        console.log(nameEleRef)
        console.log(nameEleRef.current.value);
        nameEleRef.current.value = ""; // document.getElementById("nameInput").value = "";
        ageEleRef.current.value = 0;
    
    }
  return (
    <div>
        <h2>Demo of useRef Hook - Accessing DOM Elements</h2>
        <ul>
            <li>
                <input type="text" placeholder="userName" ref={nameEleRef}/>
            </li>
            <li>
                <input type="text" placeholder="userAge" ref={ageEleRef}/>
            </li>
            <li>
                <button onClick={handleFocus}>Get Focus</button>
                <button onClick={handleReset}>Reset</button>
            </li>
        </ul>
    </div>
  );
}
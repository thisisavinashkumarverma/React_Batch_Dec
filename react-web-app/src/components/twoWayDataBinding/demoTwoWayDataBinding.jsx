import { useState } from "react";

export default function DemoTwoWayDataBinding() {
    var userName = "Teena";
    const[userAge, setUserAge] = useState(0);

    function handleUserAgeChange(event) {
        setUserAge(event.target.value);
    }
    return (
        <>
            User name is - {userName}
            <br />
            <input type="text" placeholder="USer Age" value={userAge} onChange={handleUserAgeChange}/>
            <hr />
            User age is - {userAge}
        </>
    )
}
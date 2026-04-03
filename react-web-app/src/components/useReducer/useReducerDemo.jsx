import { useState } from "react"

export default function UseReducerDemo() {
    // function arrayReducer() {
    //     var data = [2, 5, 6, 7, 8];
    //     var result = data.reduce((accumlator, currValue) => {return accumlator + currValue}, 100);

    //     console.log("result  " + result);
    //     // find, filter, sort, map, reduce 
    // }
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState(0);

    function handleNameChange(event) {
        setUserName(event.target.value);
    }
    
    function handleAgeChange(event) {
        setUserAge(event.target.value);
    }
    function showData() {
        var data = {userName, userAge};
        console.log(data)
    }
    return (
        <>
            <h3>USer Registration Page</h3>
            <ul>
                <li>
                    <input type="text" placeholder="Enter user name" onChange={handleNameChange}/>
                </li>
                <li>
                    <input type="number" placeholder="Enter user age" onChange={handleAgeChange} />
                </li>
                <li>
                    <button onClick={showData}>Save Data</button>
                </li>
            </ul>
        </>
    )
}
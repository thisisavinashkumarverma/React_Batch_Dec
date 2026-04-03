
import React from 'react';
export default function DemoTwoWayDataBinding() {
    var userName = "Mark, Chris";
    const [userCountry, setUserCountry] = React.useState('');
    const [useAge, setUserAge] = React.useState('');


    function handleValueChange(event)   {
        setUserCountry(event.target.value);
    }

    function handleAgeChange(event)   {
        setUserAge(event.target.value);
    }
   return (
       <div>
            <h4>Two way data binding</h4>
            <div>User Name is - {userName}</div>
            <div>Country name is - {userCountry}</div>
            <div>Age is - {useAge}</div>
            <div>Enter user Country - <input type="text" onChange={handleValueChange}/></div>
            <div>Enter user Age - <input type="number" onChange={handleAgeChange}/></div>
            <div><input type='date'></input></div>
       </div>
       
   )
}
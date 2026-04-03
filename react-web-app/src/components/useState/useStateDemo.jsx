import { useState } from "react";

export default function UseStateDemo() {
    var a = 90; //static memory
    const [b, setBValue] = useState(20); // State memory 
    // var userName = 'Teena'; //static
    const [userName, setUserName ] = useState(null);
    const [age, setAge, ] = useState(20);
    const [gender, setGender] = useState('male');

    // const [userData, setUserData] = useState({name: '', age: '', gender: ''});
   
    
    // useState hook 

    setTimeout(() => {
        a++;
        console.log("value of ais " + a);
        setBValue(100);
        setUserName('Krish');
        
        console.log("Value of username is " + userName);
    }, 5000 )
    return (
        <div>state demo getting rendered - {a}   - b value is {b} - User name is - {userName}</div>
    )
    
}
import { useState } from 'react'
import '../readingDataFromInputElems/readingData.css'

export default function ReadUserDataThroughObj() {
    const [userDetails, setUserDetails] = useState({});

    // function handleUserNameChange(event) {
    //     setUserDetails({...userDetails, userName: event.target.value });
    // }

    // function handleAgeChange(event) {
    //     setUserDetails({...userDetails, userAge: event.target.value });
    // }


    function handleValueChange(event, key) {
        
        setUserDetails({...userDetails, [key]: event.target.value})
    }

    return (
        <>
            <ul className='userRegPage'>
                <li>
                    <input type="text"  placeholder='Enter user name' onChange={(e) => {handleValueChange(e, 'userName')}}/>
                </li>
                <li>
                    <input type="number"  placeholder='Enter user Age' onChange={(event) => {handleValueChange(event, 'userAge')}} />
                </li>
            </ul>

            <hr />

            {JSON.stringify(userDetails)}
        </>
    )
}
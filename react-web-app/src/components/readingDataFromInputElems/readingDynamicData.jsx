import { useState } from 'react';
import './readingData.css';

export default function ReadingDataFromInputElements() {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState(0);
    const [userGender, setUserGender] = useState('');
    const [countryName, setCountryName] = useState('');


    function handleUserNameChange(event) {
        setUserName(event.target.value);
    }

    function handleGenderChange(gender) {
        setUserGender(gender);
    }

    function handleCountryChange(event) {
        setCountryName(event.target.value)
    }
    return (
        <>
            <ul className='userRegPage'>
                <li className="title">
                    User Registrtion Page
                </li>
                <li>
                    <input type="text" placeholder='Enter user name' onChange={handleUserNameChange}/>
                </li>
                <li>
                    <input type="number" placeholder='User Age' onChange={(event) => {setUserAge(event.target.value)}} />
                </li>
                <li>
                    Gender: 
                    <input name='gender' type="radio" onChange={() => {handleGenderChange('Male')}}/> Male
                    <input name='gender' type="radio"  onChange={() => {handleGenderChange('Female')}}/> Female
                </li>
                <li>
                    Location: 
                    <select onChange={handleCountryChange}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Japan">Japan</option>
                        <option value="China">China</option>
                    </select>
                </li>
                <li>
                    <button>Save Details</button>
                </li>
            </ul>

            <hr />
            <ul>
                <li>
                    User name is - {userName}
                </li>
                <li>
                    User name is - {userAge}
                </li>
                <li>
                    userGender - {userGender}
                </li>
                <li>
                    countryName - {countryName}
                </li>
            </ul>
        </>
    )
}
import { useEffect, useReducer } from "react"

var userRegistraionDetails = {
    userName: '',
    userAge: '',
    userEmail: '',
    userLocation: '',
    userSal: 0,
    userPf: 0,
    companyName: 'Microsoft',
    location: 'Newyork',
    productDetails: [],
    userAccountDetails: []
};

function reducer(state, action) { // logic of updating state value based on action 
    return {...state, [action.type]: action.value};
}

export default function UseReducerDemo2() {    
    const [state, dispatch] = useReducer(reducer, userRegistraionDetails);
    function showData() {
        console.log('state')
        console.log(state)
    }
    useEffect(() => {
        dispatch({type: 'productDetails', value: [{namne: 'laptop', price: 2000}]})
    }, [])
    
    return (
        <>
            <h3>USer Registration Page</h3>
            <ul>
                <li>
                    <input type="text" placeholder="Enter user name" onChange={(event) => {dispatch({type: 'userName', value: event.target.value})}} />
                </li>
                <li>
                    <input type="number" placeholder="Enter user age" onChange={(event) => {dispatch({type: 'userAge', value: event.target.value})}}/>
                </li>
                 <li>
                    <input type="text" placeholder="Enter user email" onChange={(event) => {dispatch({type: 'userEmail', value: event.target.value})}}  />
                </li>
                 <li>
                    <input type="text" placeholder="Enter user Location" onChange={(event) => {dispatch({type: 'userLocation', value: event.target.value})}}  />
                </li>
                 <li>
                    <input type="number" placeholder="Enter user Salary" onChange={(event) => {dispatch({type: 'userSal', value: event.target.value})}} />
                </li>
                 <li>
                    <input type="number" placeholder="Enter user pf" onChange={(event) => {dispatch({type: 'userPf', value: event.target.value})}}/>
                </li>
                <li>
                    <button onClick={showData}>Save Data</button>
                </li>
            </ul>
        </>
    )
}


import { createContext, useContext, useReducer } from "react";
export var intialState = {
    userName: 'Raj',
    age: 20,
    gender: 'Male'
}

//Custom hook
export function useUserData() {
    var userData = useContext(UserDataContext);
    return userData.state;
}

//Custom hook
export function useUserDispatcher() {
    var userData = useContext(UserDataContext);
    return userData.dispatcher;
}

export const UserDataContext = createContext();

export function reducer(state, action) {
    switch (action.type) {
        case 'change':
            return {...state, userName: action.payload.userName, age: action.payload.age}
        case 'increment':
            return {...state, age: state.age + 1}    
        default:
            return {...state, age: 50}
    }
}



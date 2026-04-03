import { useReducer } from 'react';
import {UserDataContext} from './common';
import { reducer, initialState } from './common';


export default function  ProviderComponent({children}) {
    const [state, dispatcher] = useReducer(reducer, initialState);
    
    return (
        <UserDataContext value={{state, dispatcher}}>
            {children}
        </UserDataContext>
    )
}
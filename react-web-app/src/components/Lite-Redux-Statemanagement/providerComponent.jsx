import { useReducer } from 'react';
import {intialState, UserDataContext, reducer} from './comman';
export function ProviderComponent({children}) {    
    const [state, dispatcher] = useReducer(reducer, intialState);
    return (
        <>
            <UserDataContext value={{state, dispatcher}}>
                {children} 
            </UserDataContext>
        </>
    )
}
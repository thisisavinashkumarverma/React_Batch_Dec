import { createContext, useContext } from 'react';

export var UserDataContext = createContext();

export var initialState = {name: 'Raj', age: 20, count: 20};

export var reducer = (state, action) => {
  switch (action.type) {
    case 'ageupdate':
        return {...state, age: 36}
    default:
      return state;
  }
}

export var useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) return new Error("Component not in context");
  return context.state;
}

export var useDispatcher = () => {
  const context = useContext(UserDataContext);
  if (!context) return new Error("Component not in context");
  return context.dispatcher
}
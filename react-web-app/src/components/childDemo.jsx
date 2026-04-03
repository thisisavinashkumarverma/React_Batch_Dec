export default function ChildDemo() {
    return (
        <>
            Tests
        </>
    )
}

import { createContext, useReducer, use } from 'react';

// 1. Initial State
const initialState = { count: 0, theme: 'light' };

// 2. Reducer
function appReducer(state, action) {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 };
    case 'toggle_theme': return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default: return state;
  }
}

// 3. Create Contexts
const StateContext = createContext(null);
const DispatchContext = createContext(null);

export function ChildDemo({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
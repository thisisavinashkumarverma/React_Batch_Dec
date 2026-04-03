import { createContext, useReducer, use } from 'react';

// 1. Setup Initial State
const initialState = {
  count: 0,
  theme: 'light'
};

// 2. Define the Reducer
function appReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'toggle_theme':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}

// 3. Create two contexts (State and Dispatch)
const StateContext = createContext();
const DispatchContext = createContext();

// 4. Provider Component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

// 5. Custom Hooks for cleaner consumption
export const useAppState = () => use(StateContext);
export const useAppDispatch = () => use(DispatchContext);
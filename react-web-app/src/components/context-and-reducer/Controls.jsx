import { useAppDispatch } from './AppContext';

export function Controls() {
  const dispatch = useAppDispatch();

  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={() => dispatch({ type: 'increment' })}> + </button>
      <button onClick={() => dispatch({ type: 'decrement' })}> - </button>
      <button onClick={() => dispatch({ type: 'toggle_theme' })}>
        Switch Theme
      </button>
    </div>
  );
}
import { useAppState } from './AppContext';

export function Header() {
  const { count, theme } = useAppState();
  
  const style = {
    padding: '10px',
    backgroundColor: theme === 'light' ? '#eee' : '#333',
    color: theme === 'light' ? '#000' : '#fff'
  };

  return (
    <header style={style}>
      <h1>React 19 Store</h1>
      <p>Current Count: {count}</p>
    </header>
  );
}
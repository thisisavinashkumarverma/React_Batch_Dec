import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MainBlock from './components/mainBlock/mainBlock';
import './App.css';
import { Provider } from 'react-redux';
import store from  './redux-state/store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>  
        <div >
          <Header></Header>
          <div className='container'>
            <MainBlock></MainBlock>
          </div>
          <Footer></Footer>
        </div>
    </Provider>
  )
}

export default App

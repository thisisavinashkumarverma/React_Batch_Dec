
import './App.css'
import PageHeader from './components/pageheader/pageHeader';
import MiddleBlock from './components/middleComponent/middleBlock';
import TrendingNow from './components/trendingNew/trendingNew';

function App() {
 

  return (
    <>
      <div className='container'>
          <PageHeader></PageHeader>
          <MiddleBlock></MiddleBlock>
          <TrendingNow></TrendingNow>
          
      </div>
      <div style={{"min-height": '500px'}}></div>
    </>
  )
}

export default App

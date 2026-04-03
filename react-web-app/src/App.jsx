
import './App.css'
import { useState } from 'react';
import UseStateDemo from './components/useState/useStateDemo';
// import EventHandlingDemo from './components/eventHandling/eventHandlingDemo';
// import ReadingDataFromInputElements from './components/readingDataFromInputElems/readingDynamicData';
// import DemoTwoWayDataBinding from './components/twoWayDataBinding/demoTwoWayDataBinding'
// import ReadUserDataThroughObj from './components/readingMulFieldsThroughObj/readingUserDataThroughObj'
// import UseEffectDemo from './components/useEffectHook/useEffect';
// import ApiCallDemo from './components/APICalls/apiCalls';
// import FormDemo from './components/FormsDemo/formDemo';
// import PropsDemo from './components/props/propsDemo';
// import ProductDetails from './components/props/productDetails/productDetails';
// import RatingStars from './components/props/productDetails/common/ratingStars';
// import IncDecComp from './components/customHooks/IncrementAndDecDemo';
// import PlusAndMinus from './components/customHooks/plusAndMinus';
// import LoadProducts from './components/customHooks/Example_Fetch/loadProducts';
// import LoadISROData from './components/customHooks/Example_Fetch/laodISROData';
// import Demo_dom from './components/useRefHook/Demo_dom';
// import RefUsage_Cleanup from './components/useRefHook/refUsage_Cleanup';
// import MutableObjRef from './components/useRefHook/mutableObjRef';
// import PropDrilling from './components/PropDrilling/propDrillig';
// import UseContextDemo from './components/PropDrilling/useContextDemo';
// import ParentAccessingChildData from './components/ParentAccessingChildData/callbackDemo';
// import UseReducerDemo2 from './components/useReducer/UseReducerDemo2';
// import IncrementerDecrementer from './components/useReducer/incrementedAndDec_useReducer'

// import Component1 from './components/Lite-Redux-Statemanagement/Component1/component1';
// import Component2 from './components/Lite-Redux-Statemanagement/Component2/component2';
// import Component3 from './components/Lite-Redux-Statemanagement/Component3/component3';
// import {ProviderComponent} from './components/Lite-Redux-Statemanagement/providerComponent';

// import Component1 from './components/redux/Example/component1';
// import Component2 from './components/redux/Example/component2';
// import Component3 from './components/redux/Example/component3';
// import mystore from './components/redux/store';
// import { Provider } from 'react-redux';

import Header from './components/routing/header';
import Footer from './components/routing/footer';
import MainBlock from './components/routing/mainBlock';
// import Demo from './components/higher-order-comp/higherOrderComp';
import SearchBar from './components/debouncing/searchBar';
import ThrottlingDemo from './components/throttling/throttlingDemo';
// import MemoDemo from './components/Memo/memoDemo';
// import FruitFilter from './components/Memo/useMemo';
import Sample from './components/classComp/classComp';
import { UserRegistrationForm } from './components/Formik/formikDemo';
import { DataComponent } from './errorBoundries/errorBoundries';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  // const [showProductDetails, setShowProductDetails] = useState(false);
  // var userAge = 20;
  // var addressInfo = {
  //   street: "123 Main St",
  //   city: "New York",
  //   state: "NY",
  //   zip: "10001"
  // };
  return (
    <>
      {/* <button onClick={() => setShowProductDetails(!showProductDetails)}>Toggle Product Details</button> */}
      {/* <UseStateDemo></UseStateDemo> */}
      {/* <EventHandlingDemo></EventHandlingDemo> */}
      {/* <ReadingDataFromInputElements></ReadingDataFromInputElements> */}
      {/* <DemoTwoWayDataBinding></DemoTwoWayDataBinding> */}
      {/* <ReadUserDataThroughObj></ReadUserDataThroughObj> */}
      {/* <UseEffectDemo></UseEffectDemo> */}
      {/* <ApiCallDemo></ApiCallDemo> */}
      {/* <FormDemo></FormDemo> */}
      {/* <PropsDemo userName="John" age={userAge} address={addressInfo} profession="Engineer" className="test" id="container" backgroundColor="red"></PropsDemo>
      <PropsDemo userName="Teena Smit" age="30" profession="HR" className="sample" id="abc" backgroundColor="yellow"></PropsDemo>
      <PropsDemo userName="Teena Smit" age="30" profession="HR" className="sample" id="abc" ></PropsDemo> */}
      {/* {showProductDetails && 
        <ProductDetails></ProductDetails>
      }
      <RatingStars rating={4.3}> </RatingStars> */}

      {/* <IncDecComp> </IncDecComp>

      <div >
        <hr />
        <PlusAndMinus></PlusAndMinus>
      </div> */}
{/* 
      <LoadProducts></LoadProducts>
      <hr />
      <LoadISROData></LoadISROData> */}
      
        {/* <Demo_dom></Demo_dom> */}
        {/* <RefUsage_Cleanup></RefUsage_Cleanup> */}
        {/* <MutableObjRef></MutableObjRef> */}
        {/* <UseContextDemo></UseContextDemo> */}
        {/* <ParentAccessingChildData>  </ParentAccessingChildData> */}
        {/* <UseReducerDemo2></UseReducerDemo2>

        <hr />
        <IncrementerDecrementer>  </IncrementerDecrementer> */}
      
        {/* <ProviderComponent>
          <Component1></Component1>
          <Component2></Component2>
          <Component3></Component3>
        </ProviderComponent> */}
        {/* <Provider store={mystore}>
          <Component1></Component1>
          <hr />
          <Component2></Component2>
          <hr />
          <Component3></Component3>
        </Provider> */}

        {/* <Header></Header>
        <MainBlock></MainBlock>
        <Footer></Footer> */}
        {/* <Demo></Demo> */}
        {/* <MemoDemo></MemoDemo> */}
        {/*<FruitFilter></FruitFilter> */}

          {/* <SearchBar> </SearchBar> */}
          {/* <ThrottlingDemo>  </ThrottlingDemo> */}
          {/* <Sample></Sample> */}
          {/* <UserRegistrationForm></UserRegistrationForm> */}
          <ErrorBoundary fallback={<div>Error while loading component</div>} onReset={() => {
            // Reset any state or perform any necessary cleanup here
          }}>
            <DataComponent />
          </ErrorBoundary>
    </>
  )
}

export default App

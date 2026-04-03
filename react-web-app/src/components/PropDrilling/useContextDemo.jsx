import { useState, createContext, useContext } from 'react';
import './propDrilling.css';
var UserContextMem = createContext();

export default function useContextDemo() {
    
    const [assetData] = useState({amount: 300000, bankBalance: 10000}); //dummy to avoid lint error 
  return (
    <div className='block'>
      <h1>Parent Container - {assetData.amount}</h1>
        <UserContextMem value={assetData}>
                <ChildComponent ></ChildComponent> 
        </UserContextMem>

               
    </div>
  );
}

function ChildComponent() {
    return (
        <div className='block'>
            <h2>Child Component 1 </h2>
            <GrandChildComponent ></GrandChildComponent>
        </div>
    );
}

function GrandChildComponent() {
    var assetContext = useContext(UserContextMem);
    return (
        <div className='block'>
            <h3>Grand Child Component - {assetContext.amount}</h3>
            <GreatGrandChildComponent></GreatGrandChildComponent>
            
        </div>
    );
}

function GreatGrandChildComponent() {
    var assetContext = useContext(UserContextMem);
//     UserContextMem.amount = 500000; // this won't work as context is read only
    assetContext.amount += 5000;
    console.log(assetContext)
    return (
        <div className='block' >
            <h4>Great Grand Child Component - {assetContext.amount}</h4>
        </div>
    );
}
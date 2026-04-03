import { useState } from 'react';
import './propDrilling.css';
export default function PropDrilling() {
    const [assetData, setAssetData] = useState({amount: 300000}); //dummy to avoid lint error 
  return (
    <div className='block'>
      <h1>Parent Container - {assetData.amount}</h1>
      <ChildComponent assets={assetData}></ChildComponent>
    </div>
  );
}

function ChildComponent({ assets }) {
    return (
        <div className='block'>
            <h2>Child Component 1 - {assets.amount}</h2>
            <GrandChildComponent assets={assets}></GrandChildComponent>
        </div>
    );
}

function GrandChildComponent({ assets }) {
    return (
        <div className='block'>
            <h3>Grand Child Component - {assets.amount}</h3>
            <GreatGrandChildComponent assets={assets}></GreatGrandChildComponent>
        </div>
    );
}

function GreatGrandChildComponent({ assets }) {
    return (
        <div className='block' >
            <h4>Great Grand Child Component - {assets.amount}</h4>
        </div>
    );
}


import { createRoot } from 'react-dom/client';
import { VisitionCard } from './components/visiting_card/visitingCard';
import ProductDetails from './components/productDetails/productDetails';
import DemoTwoWayDataBinding from './components/twoWayDataBinding/twoWayDataBindingDemo';
import ProductData from './components/Iterating/productDetails';
import DataBindingDemo from './components/Iterating/dataBinding';

// Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';
var appDiv = document.createElement('div');
appDiv.id = 'app';
document.body.appendChild(appDiv);


// Render your React component instead
const root = createRoot(document.getElementById('app'));
// <VisitionCard /><ProductDetails /><DemoTwoWayDataBinding/>
root.render(<div> <ProductData ></ProductData>   </div>);

console.log("About to load the logic of the existing web application.");
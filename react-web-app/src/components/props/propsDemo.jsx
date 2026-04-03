// export default function PropsDemo() {
//     return (
//         <>
//             <h2>Props Demo Component</h2>
//         </>
//     )
// }

import React from 'react';
import './propsDemo.css';
var PropsDemo = ({userName, age, profession, address, backgroundColor="pink"}) => {
    console.log(address);
    return (
        <div className='visitingCard' style={{backgroundColor:backgroundColor}}>
            <h2>{userName}</h2>
            <hr />
            <ul>
                <li>Age: {age}</li>
                <li>Profession: {profession}</li>
            </ul>
            <hr />
        </div>
    )
}

export default PropsDemo;
import React, { useState } from 'react'

const Contact1 = () => {
    
    // var selectedDepControls = {
    //     address: [
    //         {
    //             label: 'Door No.',
    //             type: 'textarea'
    //         },
    //         {
    //             label: 'Streen name',
    //             type: 'text'
    //         },
    //         {
    //             label: 'pincode',
    //             type: 'number'
    //         }
    //     ],
    //     exp: [

    //     ]
    // }

    const[buttonList] = useState(['radio', 'checkbox'])
  return (
    <div>
        Contact 1
        <ul>
            {
                buttonList.map((type) => (
                    <RenderButton type={type}>{type}</RenderButton>
                ))
            }
        </ul>
    </div>
  )
}

function RenderButton({type}) {    
    return (
        <>  
            <input type={type} />
        </> 
    )
}

export default Contact1
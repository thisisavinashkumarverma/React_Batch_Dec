import {memo} from 'react';
var Child = memo( ({value}) => { // 0, 1, 2, 3, 0, 1, 2, 3
    console.log("Child comp rendered" + new Date().toLocaleTimeString());
    return <b>Value from Child comp is - {value}</b>
});

export default Child;
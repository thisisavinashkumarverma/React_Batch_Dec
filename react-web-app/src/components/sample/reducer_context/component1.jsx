
import {useUserData, initialState, reducer, useDispatcher} from './common';

export default function Component1() {
    
    var data = useUserData();
    var dispatcher = useDispatcher();

    function handleButtonClick() {
        dispatcher({type: 'ageupdate', payload: {age: 30}})
    }
    return (
        <>
            <br />
            <hr />
            Component 1 - {data.name}  ---- {data.age}
            <button onClick={handleButtonClick}>Click</button>
            <hr />
        </>
    )

}
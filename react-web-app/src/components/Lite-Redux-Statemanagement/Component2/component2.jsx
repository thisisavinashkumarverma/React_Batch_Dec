

import { useUserData, useUserDispatcher} from "../comman";
export default function Component2() {
   
    var data = useUserData();
    var dispatcher = useUserDispatcher();

    function handleUpdateAge() {
        dispatcher({type: 'change', payload: {userName: 'Krish', age: 30}});
    }
    return (
        <>
            <hr />
            <br />            
                Component 2  - {data.userName} - {data.age}
                <button onClick={handleUpdateAge}>Update Age</button>
            <br />
            <hr />
        </>
    )
}